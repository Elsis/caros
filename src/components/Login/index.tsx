import React, { useEffect, useState } from 'react';
import { Input, Button, Form } from 'antd';
import { UserOutlined,EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const Login = () => {
  const [value, setValue] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  
  useEffect(() => {
    console.log(isValid);
  }, [isValid]);

  useEffect(() => {
    setIsValid(!!username && password.length > 8 );
  }, [username, password]);

  const handleSubmit = () => {
    console.log(username + ' ' + password);
    alert('You are logged');
  }
  return (
    <>
    <div className="login img-opacity">
      <div className="login-form">
        <i className="mdi mdi-account-circle-outline login-img"/>
        <h1>Iniciar Sesión</h1>
        <Form onFinish={handleSubmit}>
        <Form.Item name="usuario" rules={[{ required: true, message: 'Por favor ingresa tu usuario!' }]}>
                    <Input className="input-border" placeholder="Usuario" prefix={<i className="mdi mdi-account" />} type="text" value={username} onChange={(event) => {
                    setUsername(event.target.value);   }}/>          
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}>
          <Input.Password className="input-border" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} placeholder="Contraseña" prefix={<i className="mdi mdi-lock" />} type="password" value={password} onChange={(event) => {
            setPassword(event.target.value);            
          }}/>
          </Form.Item>
          <Form.Item >
          <Button className="btn-red input-border"  htmlType="submit">INGRESAR</Button>
          </Form.Item>
          <Form.Item >
          <p className="p-color" >Registrarse</p>
          <p>Olvidaste tu Contraseña?</p>
          </Form.Item>
        </Form>
      </div>
    </div>
    </>
  );
};
