import React from 'react';
import Axios from 'axios'
import Item from 'antd/lib/list/Item';
// import Axios from 'axios'
import { useState  } from 'react';
import { useRouter } from 'next/router';

 
const ModuleOrderShippingInformation = () => {
    const router = useRouter();
    const {
        query:{e}
    }=router
    console.log(e);
    // console.log("hello");
    // const dispatch = useDispatch();
    const [data, setData] = useState([]);
    
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    // `http://localhost:8082/api/v1/product`
                    // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
                    `http://localhost:8080/api/v1/order/id/${e}`
                );
                setData(data.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();

  

    const tableItems = data.map((item, index) => {
        return (
            <div className="ps-card ps-card--order-information ps-card--small">
            <div className="ps-card__header">
            <h4>{item.firstName}</h4>
            <h4>{item.lastName}</h4>
            </div>
            <div className="ps-card__content">
                <h5>{}</h5>
                <p>
                    <strong>Address:   {item.address}</strong>
                  
                </p>
                <p>
                    <strong>Phone No.: {item.contactNo}</strong> 
                </p>
                <p>
                    <strong>Email :{ item.postalCode}</strong> 
                </p>
            </div>
        </div>
        );
    });

  
    return (
        // <div className="ps-card ps-card--order-information ps-card--small">
            <div className="ps-card__header">
                {tableItems}
           </div>
        // </div>
    );

    }

export default ModuleOrderShippingInformation;
