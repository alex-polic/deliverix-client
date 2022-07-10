import {Layout} from "../../components/Layout";
import {UserCard} from "../../components/UserCard";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    approveVerification,
    areCouriersLoadedSelector,
    couriersSelector,
    fetchCouriers, rejectVerification
} from "../../store/users/usersSlice";
import {useEffect} from "react";
import {CouriersState} from "../../store/users/usersSliceTypes";
import {DateTime} from "luxon";

export function Verifications(){
    const dispatch = useAppDispatch();

    const couriers = useAppSelector(couriersSelector);
    const areCouriersLoaded = useAppSelector(areCouriersLoadedSelector);

    useEffect(() => {
        if(areCouriersLoaded === false)
            dispatch(fetchCouriers());
    }, [areCouriersLoaded])

    return(
        <Layout title={"Verifications"}>
            <h1>Verify couriers!</h1>
            <h2>Deliverix allows only verified couriers to take orders.</h2>
            {
                couriers.map((courier: CouriersState) => {
                    return (
                        <UserCard
                            key={courier.id}
                            profilePictureUrl={courier.profilePictureUrl}
                            username={courier.username}
                            fullName={courier.fullName}
                            email={courier.email}
                            dateOfBirth={DateTime.fromISO(courier.dateOfBirth).toFormat("yyyy-MM-dd")}
                            verificationStatus={courier.verificationStatus}
                            onApproveClick={() => dispatch(approveVerification(courier.id))}
                            onRejectClick={() => dispatch(rejectVerification(courier.id))}
                        />
                    );
                })
            }
        </Layout>
    );
}