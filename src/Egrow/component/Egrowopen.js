import React , {useState} from 'react';
// import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';
import 'antd/dist/antd.css';
// import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Egrow } from './Egrow';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


export const Egrowopen = () => {
    const [listopen , changeListopen] = useState(false)
    const handleEgrowClicked = () => {
        changeListopen(true)
    }

    const optionCliked = () => {
        changeListopen(false)
    }
    const navigate = useNavigate();
    return(
        <div>
            <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"> RazorPay </Menu.Item>
        {/* <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >

            
              <Menu.Item key="5" onClick={() => handleEgrowClicked()}>Egrow</Menu.Item>
              <Menu.Item key="6" onClick={() => optionCliked()}>option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            
           
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>{listopen && <Egrow />}</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>BY Unknown Buddies @ 2021 ! Copyrights</Footer>
  </Layout>
        </div>
    )
}
  
