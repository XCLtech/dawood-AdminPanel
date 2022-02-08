// import React from 'react';
// import DropdownAction from '~/components/elements/basic/DropdownAction';
import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const TableProjectItems = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    // `http://localhost:8082/api/v1/product`
                    // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
                    `http://localhost:8080/api/v1/product/`
                );
                setData(data.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();
    }, []);
    // const productItems = [
    //     {
    //         name: 'Herschel Leather Duffle Bag In Brown Color',
    //         sku: 'AB123456789-1',
    //         stock: 'true',
    //         price: '£125.30',
    //         date: '2019/11/06',
    //         categories: [
    //             {
    //                 name: 'Bags',
    //             },
    //             {
    //                 name: 'Clothing & Apparel',
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Apple iPhone Retina 6s Plus 64GB',
    //         sku: 'CD987654316-1',
    //         stock: 'true',
    //         price: '£1,249.99',
    //         date: '2018/12/11',
    //         categories: [
    //             {
    //                 name: 'Computers & Technologies',
    //             },
    //             {
    //                 name: 'Technologies',
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Marshall Kilburn Portable Wireless Speaker',
    //         sku: 'SF1133569600-1',
    //         stock: 'true',
    //         price: '£36.78',
    //         date: '2018/12/11',
    //         categories: [
    //             {
    //                 name: 'Babies & Moms',
    //             },
    //             {
    //                 name: 'Refrigerators',
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Xbox One Wireless Controller Black Color',
    //         sku: 'AB123456788',
    //         stock: 'false',
    //         price: '£55.30',
    //         date: '2018/12/11',
    //         categories: [
    //             {
    //                 name: 'Accessories',
    //             },
    //             {
    //                 name: 'Air Conditioners',
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Grand Slam Indoor Of Show Jumping Novel',
    //         sku: 'AB1234567899',
    //         stock: 'false',
    //         price: '£32.39',
    //         date: '2018/12/11',
    //         categories: [
    //             {
    //                 name: 'Books & Office',
    //             },
    //             {
    //                 name: 'Cars & Motocycles',
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Rayban Rounded Sunglass Brown Color',
    //         sku: 'AB123456783',
    //         stock: 'true',
    //         price: '£321.39',
    //         date: '2018/12/11',
    //         categories: [
    //             {
    //                 name: 'Clothing & Apparel',
    //             },
    //             {
    //                 name: 'Cars & Motocycles',
    //             },
    //         ],
    //     },
    // ];
    
    const postDelete = async (id)  => {

     let data=await  Axios.delete(
            // `http://localhost:8082/api/v1/product`
            // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
            `http://localhost:8080/api/v1/product/delete/${id}`
            )
            // .then(res=>console.log("deleted",res)).catch(err=>console.log("error",err))
        console.log(id)
        }
    
    const tableItems = data.map((item, index) => {
        // console.log(item.id)
        let badgeView;
        if (item.stock) {
            badgeView = <span className="ps-badge success">Stock</span>;
        } else {
            badgeView = <span className="ps-badge gray">Out of stock</span>;
        }
        return (
            <tr key={item.sku}>
                {/* <td>{index + 1}</td> */}
                <td>
                    <a href="#">
                        <strong>{item.id}</strong>
                    </a>
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                    <strong>{item.CategoryId }</strong>
                </td>
               
                {/* <td>{item.date}</td> */}
                <td>
                <button onClick={()=>postDelete(item.id)}>

                    Delete</button>
                    {/* <DropdownAction /> */}
                </td>
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>CategoryID</th>
                        
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </table>
        </div>
    );
};

export default TableProjectItems;