import React, { useEffect, useState } from 'react';
import { Input, Button, Form, Row , Col ,Avatar ,Upload} from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout/layout';
import { Navbar } from '../Shared/Navbar';

export const Profile = () => {
  const [image, setImage] = useState("/Imagenes/profile.svg");
  const onChange: any = (e: any) => {
    console.log("new image");
    let newFiles = e.target.files;
    //setImage(newFiles);

  };
    return(
      <Layout style={{height:'100vh'}}>
        <Navbar></Navbar>
        <div className="card-gray">

          <Row justify="space-around" align="middle">
            <Col lg={12} xs={24}>
              <div className="red-card">
                <div className="head-card">
                  <div>
                  <Avatar
                     size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                     icon={<img src={image} width="200px"/>}

                     />
              <div>
                <label htmlFor="upload"><img src="/Imagenes/pencil.svg" height="20px"/></label>
                 <input id="upload" style={{display:'none'}} type="file" src="/Imagenes/pencil.svg" accept="image/*"
                  onChange={(event)=> {
                   
                    console.log("new image");
                    let newFiles = event.target.files;
                    if(newFiles != null){
                      setImage(newFiles[0].name);
                    }
                   
                 console.log(event,"It is running", newFiles);
                 }}
                 onClick={(event:any)=> {
                 event.target.value = null
                 }}
                 />
               </div>
                    {/*<Button className="btn-style"><img src="/Imagenes/pencil.svg" height="20px"/></Button>*/}

                  </div>
                   <div>
                     <h4>Cassy Smith</h4>
                     <h6>15 años</h6>
                   </div>
                </div>
                <Row>
                  <Col lg={12}>
                    <p><b>Usuario: </b></p>
                    <p><b>Email:</b></p>
                    <p><b>Colegio:</b></p>
                    <p><b>Tutor:</b></p>
                  </Col>
                  <Col lg={12}>
                    <p>Ca.Smith</p>
                    <p>cassysmith@gmail.com</p>
                    <p>Santa Ana</p>
                    <p>Ron Smith</p>
                  </Col>
                </Row>

              </div>
            </Col>
            <Col lg={11} xs={24} offset={1}>
              <div className="white-card" >
              <Row>
                  <Col lg={12}>
                    <p><b>Nivel: </b></p>
                    <p><b>Tema:</b></p>
                    <p><b>Ejercicio:</b></p>
                  </Col>
                  <Col lg={12}>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>

                  </Col>
                </Row>

              </div>
              <Button className="btn-red">COMENZAR TEST </Button>
            </Col>
          </Row>
        </div>
      </Layout>
    )

  };
