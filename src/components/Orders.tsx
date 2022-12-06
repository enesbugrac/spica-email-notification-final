import React, { useEffect, useState } from "react";
import "./Orders.css";
import OrderService, { Order } from "../services/Order.service";

const Orders = () => {
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    const subs = OrderService.getAllOrdersRealtime().subscribe((res: any) =>
      setOrders(res)
    );
    return () => {
      subs.unsubscribe();
    };
  }, []);

  const handleDeleteOrder = (order: Order) => {
    OrderService.deleteOrder(order._id);
  };

  return (
    <div className="container">
      {orders.length > 0 ? (
        <>
          <h3>Current Orders</h3>
          <table className="container__table">
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Action</th>
            </tr>
            {orders?.map((order) => (
              <tr>
                <td>{order._id}</td>
                <td>{order.product_name}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteOrder(order)}
                  >
                    Delete Order
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </>
      ) : null}
    </div>
  );
};

export default Orders;
