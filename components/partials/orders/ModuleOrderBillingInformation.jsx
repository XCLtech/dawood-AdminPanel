import React from 'react';
import Axios from 'axios'
import Item from 'antd/lib/list/Item';
// import Axios from 'axios'
import { useState  } from 'react';
import { useRouter } from 'next/router';

 
const ModuleOrderBillingInformation = () => {
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
                    `http://localhost:8080/api/v1/order/orderItem/${e}`
                );
                setData(data.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();

  

        const tableItemsView = data.map((item) => {
            let badgeView, fullfillmentView;
          
          
           
            return (
                <tr key={item.id}>
                    {/* <td>{item.id}</td> */}
                    <td>
                  
                        
                    <strong>{item.id}</strong>
                                
                                {/* <strong>{item.id}</strong> */}
                           
                        {/* </Link> */}
                        {/* </button> */}
                    </td>
                    
                    {/* <td>{item.productId}</td> */}
                    <td>
                        <strong> {item.quantity}</strong>
                    </td>
                    {/* <td>{fullfillmentView}</td> */}
                    <td>
                        {/* <strong>{item.total}</strong> */}
                    </td>
                    <td>
                        {/* <strong>{item.subTotal}</strong> */}
                    </td>
                  
                </tr>
            );
        });
        return (
            <div className="table-responsive">
                <table className="table ps-table">
                    <thead>
                        <tr>
                            
                            <th>Product Id</th>
                            <th>Quantity</th>
                           
                        </tr>
                    </thead>
                    <tbody>{tableItemsView}</tbody>
                </table>
            </div>
        );

    }

export default ModuleOrderBillingInformation;
