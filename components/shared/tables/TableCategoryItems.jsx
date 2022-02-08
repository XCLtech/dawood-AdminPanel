import React from 'react';
import { Menu } from 'antd';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const TableCategoryItems = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    // `http://localhost:8082/api/v1/product`
                    // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
                    `http://localhost:8080/api/v1/category/`
                );
                setData(data.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();
    }, []);

    const tableItemsView = data.map((item) => {
        let badgeView, fullfillmentView;
       
       
        return (
            <tr key={item.id}>
                {/* <td>{item.id}</td> */}
           
                <td>
                    <strong> {item.Name}</strong>
                </td>
                <td>{item.url}</td>
                {/* <td>{fullfillmentView}</td> */}
                <td>
                    {item.createdAt}
                </td>
                <td>
                    <strong>{item.id}</strong>
                </td>
              
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
                        
                        <th>Item Name</th>
                        <th>URL</th>
                        <th>CreatedAt</th>
                        <th>ID</th>
                        
                        {/* <th>Total</th> */}
                        
                    </tr>
                </thead>
                <tbody>{tableItemsView}</tbody>
            </table>
        </div>
    );
};


export default TableCategoryItems;




// import React from 'react';

// const TableCategoryItems = () => {
//     return (
//         <div className="table-responsive">
//             <table className="table ps-table">
//                 <thead>
//                     <tr>
//                         <th>Category name</th>
//                         <th>Slug</th>
//                         <th>Created at</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>
//                             <strong>Babies &amp; Moms</strong>
//                         </td>
//                         <td>babies-and-moms</td>
//                         <td>Jul 21, 2020</td>
//                         <td>
//                             <div className="dropdown">
//                                 <a
//                                     id="dropdownMenuButton"
//                                     data-toggle="dropdown"
//                                     aria-haspopup="true"
//                                     aria-expanded="false">
//                                     <i className="icon-ellipsis"></i>
//                                 </a>
//                                 <div
//                                     className="dropdown-menu"
//                                     aria-labelledby="dropdownMenuButton">
//                                     <a className="dropdown-item" href="#">
//                                         Edit
//                                     </a>
//                                     <a className="dropdown-item" href="#">
//                                         Delete
//                                     </a>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <strong>Clothing &amp; Apparel</strong>
//                         </td>
//                         <td>clothing-and-apparel</td>
//                         <td>Jul 21, 2020</td>
//                         <td>
//                             <div className="dropdown">
//                                 <a
//                                     id="dropdownMenuButton"
//                                     data-toggle="dropdown"
//                                     aria-haspopup="true"
//                                     aria-expanded="false">
//                                     <i className="icon-ellipsis"></i>
//                                 </a>
//                                 <div
//                                     className="dropdown-menu"
//                                     aria-labelledby="dropdownMenuButton">
//                                     <a className="dropdown-item" href="#">
//                                         Edit
//                                     </a>
//                                     <a className="dropdown-item" href="#">
//                                         Delete
//                                     </a>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <strong>Electronic</strong>
//                         </td>
//                         <td>clothing-and-apparel</td>
//                         <td>Jul 21, 2020</td>
//                         <td>
//                             <div className="dropdown">
//                                 <a
//                                     id="dropdownMenuButton"
//                                     data-toggle="dropdown"
//                                     aria-haspopup="true"
//                                     aria-expanded="false">
//                                     <i className="icon-ellipsis"></i>
//                                 </a>
//                                 <div
//                                     className="dropdown-menu"
//                                     aria-labelledby="dropdownMenuButton">
//                                     <a className="dropdown-item" href="#">
//                                         Edit
//                                     </a>
//                                     <a className="dropdown-item" href="#">
//                                         Delete
//                                     </a>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <strong>Home Garden &amp; Kitchen</strong>
//                         </td>
//                         <td>Home-garden-and-kitchen</td>
//                         <td>Jul 21, 2020</td>
//                         <td>
//                             <div className="dropdown">
//                                 <a
//                                     id="dropdownMenuButton"
//                                     data-toggle="dropdown"
//                                     aria-haspopup="true"
//                                     aria-expanded="false">
//                                     <i className="icon-ellipsis"></i>
//                                 </a>
//                                 <div
//                                     className="dropdown-menu"
//                                     aria-labelledby="dropdownMenuButton">
//                                     <a className="dropdown-item" href="#">
//                                         Edit
//                                     </a>
//                                     <a className="dropdown-item" href="#">
//                                         Delete
//                                     </a>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <strong>Computer &amp; Technologies</strong>
//                         </td>
//                         <td>computer-and-technologies</td>
//                         <td>Jul 21, 2020</td>
//                         <td>
//                             <div className="dropdown">
//                                 <a
//                                     id="dropdownMenuButton"
//                                     data-toggle="dropdown"
//                                     aria-haspopup="true"
//                                     aria-expanded="false">
//                                     <i className="icon-ellipsis"></i>
//                                 </a>
//                                 <div
//                                     className="dropdown-menu"
//                                     aria-labelledby="dropdownMenuButton">
//                                     <a className="dropdown-item" href="#">
//                                         Edit
//                                     </a>
//                                     <a className="dropdown-item" href="#">
//                                         Delete
//                                     </a>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TableCategoryItems;