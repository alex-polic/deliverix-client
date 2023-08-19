import {Layout} from "../components/Layout";
import {PageCard} from "../components/PageCard";
import {
    AccountBox,
    AssignmentLate,
    AssignmentTurnedIn,
    Attachment, Fastfood,
    Receipt,
    ReceiptLong
} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {
    currentUserSelector,
    fetchCurrentUser
} from "../store/auth/authSlice";
import {useEffect} from "react";
import UserType from "../dtos/enums/userType";

export function Dashboard(){
    const dispatch = useAppDispatch();
    const currentUserData = useAppSelector(currentUserSelector);

    useEffect(() => {
        if(currentUserData.id == 0)
            dispatch(fetchCurrentUser());
    }, [currentUserData])

    return(
        <Layout>
            <h1>Welcome to Sellers!</h1>
            <h2>Sellers is your go-to delivery service.</h2>
            <div className={"dashboard-container"}>
                <PageCard
                    href={"/profile"}
                    pageTitle={"Profile"}
                    pageIcon={<AccountBox />}
                />
                {currentUserData.role === UserType.Admin &&
                    <>
                        <PageCard
                            href={"/admin/verifications"}
                            pageTitle={"Verifications"}
                            pageIcon={<Attachment />}
                        />

                        <PageCard
                        href={"/admin/orders"}
                        pageTitle={"All Orders"}
                        pageIcon={<ReceiptLong />}
                        />

                        <PageCard
                            href={"/admin/products"}
                            pageTitle={"Products"}
                            pageIcon={<Fastfood />}
                        />
                    </>
                }
                {currentUserData.role === UserType.Buyer &&
                    <>
                        <PageCard
                            href={"/buyer/order"}
                            pageTitle={"New/View Order"}
                            pageIcon={<Receipt />}
                        />

                        <PageCard
                            href={"/buyer/pastOrders"}
                            pageTitle={"Past Orders"}
                            pageIcon={<AssignmentTurnedIn />}
                        />
                    </>
                }
                {currentUserData.role === UserType.Seller &&
                    <>
                        <PageCard
                            href={"/seller/newOrder"}
                            pageTitle={"New Orders"}
                            pageIcon={<AssignmentLate />}
                        />

                        <PageCard
                            href={"/seller/myOrders"}
                            pageTitle={"My Orders"}
                            pageIcon={<AssignmentTurnedIn />}
                        />

                        <PageCard
                            href={"/seller/currentOrder"}
                            pageTitle={"Current Order"}
                            pageIcon={<Receipt />}
                        />

                        <PageCard
                            href={"/admin/products"}
                            pageTitle={"Products"}
                            pageIcon={<Fastfood />}
                        />
                    </>
                }

            </div>
        </Layout>
    );
}