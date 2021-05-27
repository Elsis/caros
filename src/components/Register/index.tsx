import React, { useEffect, useState } from 'react';
import { Button, Input, Layout, Row, Col, Form, InputNumber } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [tutor, setTutor] = useState('');
  const [age, setAge] = useState(0);


  const onNumberChangeCarlos = (e : any) => {
    console.log("it's running", e);

    if(e === Number){
      const newAge = e;
      console.log("it's running");
  
      const regex = /^[0-9\b]+$/;
      if(regex.test(newAge) ) {
        console.log("no");
        setAge(newAge);
      }
      return;
    }
    
    /* if (Number.isNaN(newAge)) {
      console.log("it",Number.isNaN(newAge), newAge);
    } else {
    console.log("NOOO");

      setAge(newAge);
    } */
  }
  
  //const onNumberChange = (e : any) => {
    // const newAge = parseInt(e.target.value || '0', 10);
    //console.log("it's running");

    //if (Number.isNaN(age)) {
      //return;
    //}

   /*  if (!('number' in value)) {
       
    }*/
   // setAge(newAge);

/*     triggerChange({
      number: newAge,
    }); 
  }; */

  const handleSubmit = () => {
    console.log(username + ' ' + password);
    alert('You are logged');
  }
  return (
    <Layout style={{ height: '100vh' }}>
      <div className="register">
        <Row>
          <Col lg={10}>
            <div className="register-form">
              <h2>REGISTRATE</h2>
              <h4>Llena todos los campos de texto</h4>
              <Form onFinish={handleSubmit}>
                <Form.Item name="nombre" rules={[{ required: true, message: 'Por favor ingresa tu nombre!' }]}>
                  <Input className="input-form" type="text" placeholder="Nombre" value={name} onChange={(event) => {
                    setName(event.target.value);
                  }}></Input>
                </Form.Item>
                <Form.Item name="usuario" rules={[{ required: true, message: 'Por favor ingresa un nombre usuario!' }]}>
                  <Input className="input-form" type="text" placeholder="Usuario" value={username} onChange={(event) => {
                    setUsername(event.target.value);
                  }}></Input>
                </Form.Item>
                <Form.Item name="password" rules={[({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value.length > 8) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error('La contraseña tiene que tener mas de 8 caracteres'));
                    }
                  },
                }), { required: true, message: 'Por favor ingresa tu contraseña', },]}>
                  <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} className="input-form" type="password" placeholder="Contrasena" value={password} onChange={(event) => {
                    setPassword(event.target.value);
                  }}></Input.Password>
                </Form.Item>
                <Form.Item name="confirm-password" dependencies={['password']} hasFeedback rules={[({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Las dos contraseñas no coinciden!'));
                  },
                }), { required: true, message: 'Por favor confirma tu contraseña!' }]}>
                  <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} className="input-form" type="password" placeholder="Confirmar Contraseña" value={confirmpassword} onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}></Input.Password>
                </Form.Item>

                <Form.Item name="email" rules={[{ type: 'email', message: 'Email no valido!', }, { required: true, message: 'Por favor ingresa tu email', },]}>
                  <Input className="input-form" type="text" placeholder="Email" value={email} onChange={(event) => {
                    setEmail(event.target.value);
                  }}></Input>
                </Form.Item>
                <Form.Item name="colegio" rules={[{ required: true, message: 'Por favor ingresa el nombre de tu colegio' }]}>
                  <Input className="input-form" type="text" placeholder="Colegio" value={school} onChange={(event) => {
                    setSchool(event.target.value);
                  }}></Input>
                </Form.Item>
                <Form.Item name="tutor" rules={[{ required: true, message: 'Por favor ingresa el nombre tu Tutor!' }]}>
                  <Input className="input-form" type="text" placeholder="Tutor" value={tutor} onChange={(event) => {
                    setTutor(event.target.value);
                  }}></Input>
                </Form.Item>
                <Form.Item name="age"  rules={[{ required: true, message: 'Por favor ingresa tu edad!' }]}>
                  <InputNumber className="input-form" type="text" value={age} onChange={onNumberChangeCarlos}

                  /*  value={age} onChange={(event) => { 
                   const x= event.target.value;
                   console.log(event.target.value, " ", event.target.value[event.target.value.length-1] );
                   console.log("1234567890".includes(x[x.length - 1]) );
                   if("1234567890".includes(x[x.length - 1]) ){
                   setAge(event.target.value);
                   }
                   console.log(event.target.value); 
                   }} */
                  ></InputNumber>
                </Form.Item>
                <Button className="btn-red input-form" htmlType="submit">REGISTRAR</Button>
              </Form>
            </div>

          </Col>
          <Col lg={14}>
            <img src="https://i.imgur.com/j2Ilsl6.jpg" className="register-bg" title="source: imgur.com" />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};
