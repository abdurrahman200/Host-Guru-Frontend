import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { AppstoreOutlined, StarOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import OrderFrom from './OrderFrom';

const { Content, Sider } = Layout;
const { Title } = Typography;

const Orders = () => {

    let { id } = useParams()

    console.log(id);
    return (
        <>
            <Layout >
                <Sider style={{ color: '#fff' }}>
                    <Title level={4} style={{ color: '#fff', textAlign: 'center', margin: '2rem 0', }}> <Link to="/" target="_blank"> <HomeOutlined /> HOST GURU  </Link> </Title>

                    <Menu theme="dark" mode="inline" defaultOpenKeys={['1']}>
                        <Menu.Item key="1"> <Link to="/OurOrder"> <AppstoreOutlined /> OurOrder  </Link> </Menu.Item>
                        <Menu.Item key="2"> <Link to="/Review"> <StarOutlined /> Review  </Link> </Menu.Item>
                       
                    </Menu>

                </Sider>
                <Layout style={{ padding: '2rem 1rem' }}>
                    <Content >
                        <div>
                            <OrderFrom />
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    );
};

export default Orders;