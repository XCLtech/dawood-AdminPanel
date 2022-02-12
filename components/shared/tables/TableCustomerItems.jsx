import React from 'react';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import Axios from 'axios';
import { useState } from 'react';
import  { useEffect } from 'react';

const TableCustomerItems = () => {
    // const customers = [
    //     {
    //         name: 'Jenny Simmonds',
    //         phone: '(+921) 211-32-1145',
    //         balance: '$211.00',
    //         orders: '10',
    //         status: 'true',
    //     },
    //     {
    //         name: 'Ammara Molloy',
    //         phone: '(+921) 916-971-217',
    //         balance: '$211.00',
    //         orders: '10',
    //         status: 'true',
    //     },
    //     {
    //         name: 'Anisa Forster',
    //         phone: '(+921) 319-176-113',
    //         balance: '$211.00',
    //         orders: '10',
    //         status: 'true',
    //     },
    //     {
    //         name: 'Hashir Wilson',
    //         phone: '(+921) 393-112-298',
    //         balance: '$211.00',
    //         orders: '10',
    //         status: 'false',
    //     },
    //     {
    //         name: 'Grover Sampson',
    //         phone: '(+921) 393-872-137',
    //         balance: '$211.00',
    //         orders: '10',
    //         status: 'true',
    //     },
    //     {
    //         name: 'Nelson Mckeown',
    //         phone: '(+921) 393-872-998',
    //         balance: '$211.00',
    //         orders: '10',
    //         status: 'false',
    //     },
    //     {
    //         name: 'Zunaira Akhtar',
    //         phone: '(+921) 393-872-145',
    //         balance: '$211.00',
    //         orders: '10',
    //         status: 'true',
    //     },
    //     {
    //         name: 'Natan Kramer',
    //         phone: '(+921) 293-872-145',
    //         balance: '$211.00',
    //         orders: '10',
    //         status: 'false',
    //     },
    //     {
    //         name: 'Jesse Pollard',
    //         phone: '(+921) 291-32-145',
    //         balance: '$211.00',
    //         orders: '10',
    //         status: 'true',
    //     },
    // ];
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    // `http://localhost:8082/api/v1/product`
                    // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
                    `http://localhost:8080/api/v1/Email/`
                );
                setData(data.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();
    }, []);
    const tableItems = data.map((item, index) => {
        // console.log(item.id)
       
        return (
            <tr key={item.sku}>
                {/* <td>{index + 1}</td> */}
               
                <td>{item.Email}</td>
               
            </tr>
        );
    });
    const tableItemsView = data.map((item, index) => {
    

        return (
            <tr key={index}>
                <td><strong>{item.Email}</strong></td>
                <td>
                    {/* <strong>{item.Email}</strong> */}
                </td>
                {/* <td>{item.Email}</td> */}
                {/* <td>{item.Email}</td> */}
                
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                    
                        <th>Email of Subscribers</th>
                        
                    </tr>
                </thead>
                <tbody>{tableItemsView}</tbody>
            </table>
        </div>
    );
};

export default TableCustomerItems;
