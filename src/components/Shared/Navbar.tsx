import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export const Navbar = () => {
    return (
      <div className="navbar">
         <Header>
           <img className="logo" src="/Imagenes/think.svg" alt="" width="18px" />
           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {/* <Menu.Item key="1">nav 1</Menu.Item>
             <Menu.Item key="2">nav 2</Menu.Item>*/}
             <SubMenu key="SubMenu" icon={<UserOutlined />} title="Perfil de usuario">
                <Menu.Item key="setting:1">Salir</Menu.Item>
             </SubMenu>
           </Menu>
         </Header>
      </div>
    );
};
