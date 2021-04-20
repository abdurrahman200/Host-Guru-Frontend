import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';

const OrderTable = () => {
    
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        fetch('https://guarded-coast-78303.herokuapp.com/AllOrder')
            .then(Response => Response.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <Row justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Card title="Our Client or Customers orderiew">
                        <table>
                            <thead>
                                <tr>

                                    <th>name</th>
                                    <th>email</th>
                                    <th>serviceName</th>
                                    <th>photo</th>
                                    <th>price </th>
                                   
                                    {/* <th>Action</th> */}
                                </tr>
                            </thead>

                            <tbody>

                                {orders && orders.map(order =>
                                    <tr key={order.id}>

                                       
                                        <td width="20%">{order.name}</td>
                                        <td width="20%">{order.email}</td>
                                        <td >{order.serviceName}</td>
                                        <td><img src={order.photo} width="60" /></td>
                                        <td>{order.price}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default OrderTable;