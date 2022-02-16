import React, { useEffect } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import ModuleOrderShippingInformation from '~/components/partials/orders/ModuleOrderShippingInformation';
import ModuleOrderBillingInformation from '~/components/partials/orders/ModuleOrderBillingInformation';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const OrderDetailPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);
    return (
        <ContainerDefault title="Order Detail">
            <HeaderDashboard
                title="Order Detail"
                description="Martfury Order Detail"
            />
            <section className="ps-dashboard">
                <div className="ps-section__left">
                    <div className="row">
                        <div className="col-md-4">
                            <ModuleOrderShippingInformation />
                        </div>
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-4">
                            {/* <ModuleOrderShippingInformation /> */}
                        </div>
                    </div>
                    <div className="ps-card ps-card--track-order">
                        <div className="ps-card__header">
                            <h4>#ABD-235711</h4>
                        </div>
                        <div className="ps-card__content">
                        <ModuleOrderBillingInformation />
                        </div>
                    </div>
                </div>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(OrderDetailPage);
