import React from "react";
import { Menu } from "antd";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
        <td>{item.createdAt}</td>
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
    <div className='table-responsive'>
      <table className='table ps-table'>
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
