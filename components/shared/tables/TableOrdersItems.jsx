
import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



const TableOrdersItems = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    // `http://localhost:8082/api/v1/product`
                    // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
                    `http://localhost:8080/api/v1/order/`
                );
                setData(data.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();
    }, []);
    // const data =
    
                        
        // {
        //     id: '#A580',
        //     date: 'Aug 15, 2020',
        //     product: 'Unero Black Military',
        //     payment: true,
        //     fullfillment: 'delivered',
        //     total: '$56.00',
        // },
        // {
        //     id: '#B260',
        //     date: 'Aug 16, 2020',
        //     product: 'Marsh Speaker',
        //     payment: false,
        //     fullfillment: 'delivered',
        //     total: '$56.00',
        // },
        // {
        //     id: '#A583',
        //     date: 'Aug 17, 2020',
        //     product: 'Lined Blend T-Shirt',
        //     payment: true,
        //     fullfillment: 'In Progress',
        //     total: '$516.00',
        // },
        // {
        //     id: '#A523',
        //     date: 'Aug 18, 2020',
        //     product: 'DJI MAcvic Quadcopter',
        //     payment: false,
        //     fullfillment: 'delivered',
        //     total: '$112.00',
        // },
        // {
        //     id: '#A112',
        //     date: 'Aug 19, 2020',
        //     product: 'Black T-Shirt',
        //     payment: true,
        //     fullfillment: 'Cancel',
        //     total: '$30.00',
        // },

        const postDelete =  (id)  => {

            let data=  Axios.get(
                     // `http://localhost:8082/api/v1/product`
                     // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
                     ` http://localhost:8080/api/v1/order/id/${id}`
                     )
            
                     // .then(res=>console.log("deleted",res)).catch(err=>console.log("error",err))
                 
                 }

    const tableItemsView = data.map((item) => {
        let badgeView, fullfillmentView;
        const menuView = (
            <Menu>
                <Menu.Item key={0}>
                    <a className="dropdown-item" href="#">
                        Edit
                    </a>
                </Menu.Item>
                <Menu.Item key={0}>
                    <a className="dropdown-item" href="#">
                        <i className="icon-t"></i>
                        Delete
                    </a>
                </Menu.Item>
            </Menu>
        );
        if (item.payment) {
            badgeView = <span className="ps-badge success">Paid</span>;
        } else {
            badgeView = <span className="ps-badge gray">Unpaid</span>;
        }
        switch (item.fullfillment) {
            case 'In Progress':
                fullfillmentView = (
                    <span className="ps-fullfillment warning">In Progress</span>
                );
                break;
            case 'Cancel':
                fullfillmentView = (
                    <span className="ps-fullfillment danger">Cancel</span>
                );
                break;
            default:
                fullfillmentView = (
                    <span className="ps-fullfillment success">delivered</span>
                );
                break;
        }
        return (
            <tr key={item.id}>
                {/* <td>{item.id}</td> */}
                <td>
                <button className="ps-dropdown__toggle" onClick={()=>postDelete(item.id)}>
                    <Link href="/orders/order-detail/">
                        
                        <a>
                            <strong>{item.id}</strong>
                        </a>
                    </Link>
                    </button>
                </td>
                
                <td>
                    <strong> {item.createdAt}</strong>
                </td>
                <td>{item.updatedAt}</td>
                {/* <td>{fullfillmentView}</td> */}
                <td>
                    <strong>{item.total}</strong>
                </td>
                <td>
                    <strong>{item.subTotal}</strong>
                </td>
                <td>{item.contactInfo}</td>
                {/* <td>
                    <DropdownAction />
                </td> */}
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        
                        <th>ID</th>
                        <th>CreatedAt</th>
                        <th>UpdatedAt</th>
                        <th>Total</th>
                        <th>Subtotal</th>
                        {/* <th>Total</th> */}
                        <th>Contact Info</th>
                    </tr>
                </thead>
                <tbody>{tableItemsView}</tbody>
            </table>
        </div>
    );
};

export default TableOrdersItems;







// import React from 'react';
// import Link from 'next/link';
// import { Menu } from 'antd';
// import DropdownAction from '~/components/elements/basic/DropdownAction';
// import Axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';



// const TableOrdersItems = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         const fetchBags = async () => {
//             try {
//                 const data = await Axios.get(
//                     // `http://localhost:8082/api/v1/product`
//                     // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
//                     `http://localhost:8080/api/v1/order/`
//                 );
//                 setData(data.data.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchBags();
//     }, []);
//     // const data =
    
                        
//         // {
//         //     id: '#A580',
//         //     date: 'Aug 15, 2020',
//         //     product: 'Unero Black Military',
//         //     payment: true,
//         //     fullfillment: 'delivered',
//         //     total: '$56.00',
//         // },
//         // {
//         //     id: '#B260',
//         //     date: 'Aug 16, 2020',
//         //     product: 'Marsh Speaker',
//         //     payment: false,
//         //     fullfillment: 'delivered',
//         //     total: '$56.00',
//         // },
//         // {
//         //     id: '#A583',
//         //     date: 'Aug 17, 2020',
//         //     product: 'Lined Blend T-Shirt',
//         //     payment: true,
//         //     fullfillment: 'In Progress',
//         //     total: '$516.00',
//         // },
//         // {
//         //     id: '#A523',
//         //     date: 'Aug 18, 2020',
//         //     product: 'DJI MAcvic Quadcopter',
//         //     payment: false,
//         //     fullfillment: 'delivered',
//         //     total: '$112.00',
//         // },
//         // {
//         //     id: '#A112',
//         //     date: 'Aug 19, 2020',
//         //     product: 'Black T-Shirt',
//         //     payment: true,
//         //     fullfillment: 'Cancel',
//         //     total: '$30.00',
//         // },

//         const postDelete =  (id)  => {

//             let data=  Axios.get(
//                      // `http://localhost:8082/api/v1/product`
//                      // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
//                      ` http://localhost:8080/api/v1/order/id/${id}`
//                      )
            
//                      // .then(res=>console.log("deleted",res)).catch(err=>console.log("error",err))
                 
//                  }

//     const tableItemsView = data.map((item) => {
//         let badgeView, fullfillmentView;
//         const menuView = (
//             <Menu>
//                 <Menu.Item key={0}>
//                     <a className="dropdown-item" href="#">
//                         Edit
//                     </a>
//                 </Menu.Item>
//                 <Menu.Item key={0}>
//                     <a className="dropdown-item" href="#">
//                         <i className="icon-t"></i>
//                         Delete
//                     </a>
//                 </Menu.Item>
//             </Menu>
//         );
//         if (item.payment) {
//             badgeView = <span className="ps-badge success">Paid</span>;
//         } else {
//             badgeView = <span className="ps-badge gray">Unpaid</span>;
//         }
//         switch (item.fullfillment) {
//             case 'In Progress':
//                 fullfillmentView = (
//                     <span className="ps-fullfillment warning">In Progress</span>
//                 );
//                 break;
//             case 'Cancel':
//                 fullfillmentView = (
//                     <span className="ps-fullfillment danger">Cancel</span>
//                 );
//                 break;
//             default:
//                 fullfillmentView = (
//                     <span className="ps-fullfillment success">delivered</span>
//                 );
//                 break;
//         }
//         return (
//             <tr key={item.id}>
//                 {/* <td>{item.id}</td> */}
//                 <td>
//                 <button className="ps-dropdown__toggle" onClick={()=>postDelete(item.id)}>
//                     <Link href="/orders/order-detail/">
                        
//                         <a>
//                             <strong>{item.id}</strong>
//                         </a>
//                     </Link>
//                     </button>
//                 </td>
                
//                 <td>
//                     <strong> {item.createdAt}</strong>
//                 </td>
//                 <td>{item.updatedAt}</td>
//                 {/* <td>{fullfillmentView}</td> */}
//                 <td>
//                     <strong>{item.total}</strong>
//                 </td>
//                 <td>
//                     <strong>{item.subTotal}</strong>
//                 </td>
//                 <td>{item.contactInfo}</td>
//                 {/* <td>
//                     <DropdownAction />
//                 </td> */}
//             </tr>
//         );
//     });
//     return (
//         <div className="table-responsive">
//             <table className="table ps-table">
//                 <thead>
//                     <tr>
                        
//                         <th>ID</th>
//                         <th>CreatedAt</th>
//                         <th>UpdatedAt</th>
//                         <th>Total</th>
//                         <th>Subtotal</th>
//                         {/* <th>Total</th> */}
//                         <th>Contact Info</th>
//                     </tr>
//                 </thead>
//                 <tbody>{tableItemsView}</tbody>
//             </table>
//         </div>
//     );
// };

// export default TableOrdersItems;