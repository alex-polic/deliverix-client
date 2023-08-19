import {Layout} from "../../components/Layout";
import {UserCard} from "../../components/UserCard";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    approveVerification,
    areSellersLoadedSelector,
    sellersSelector,
    fetchSellers, rejectVerification
} from "../../store/users/usersSlice";
import {useEffect} from "react";
import {SellersState} from "../../store/users/usersSliceTypes";
import {DateTime} from "luxon";

export function Verifications(){
    const dispatch = useAppDispatch();

    const sellers = useAppSelector(sellersSelector);
    const areSellersLoaded = useAppSelector(areSellersLoadedSelector);

    useEffect(() => {
        if(areSellersLoaded === false)
            dispatch(fetchSellers());
    }, [areSellersLoaded])

    return(
        <Layout title={"Verifications"}>
            <h1>Verify sellers!</h1>
            <h2>Sellers App allows only verified sellers to take orders.</h2>
            {
                sellers.map((seller: SellersState) => {
                    return (
                        <UserCard
                            key={seller.id}
                            profilePictureUrl={seller.profilePictureUrl}
                            username={seller.username}
                            fullName={seller.fullName}
                            email={seller.email}
                            dateOfBirth={DateTime.fromISO(seller.dateOfBirth).toFormat("yyyy-MM-dd")}
                            verificationStatus={seller.verificationStatus}
                            onApproveClick={() => dispatch(approveVerification(seller.id))}
                            onRejectClick={() => dispatch(rejectVerification(seller.id))}
                        />
                    );
                })
            }
        </Layout>
    );
}