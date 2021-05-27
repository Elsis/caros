
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Question } from './Question';

export const TestSection = ({isModalVisible, setIsModalVisible}:{isModalVisible:boolean, setIsModalVisible:Function}) => {
   

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
      return (
      <>
    
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        </Modal>
      </>
    );
  };
  
