import React,{useState} from 'react';

import { Button } from 'antd';

import { Video } from './Video';
import { PlayList } from './PlayList';
import { Description } from './Description';
import { Buttons } from './Buttons';
import { Navbar } from '../Shared/Navbar';
import { TestSection } from './TestSection';


export const Reinforcement = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <>
        <TestSection isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}></TestSection>
        <Button onClick={()=>setIsModalVisible(true)}>Aqui</Button>
        <Navbar></Navbar>
        <div style={{display: 'flex'}}>
            <Video></Video>
            <PlayList></PlayList>
        </div>
        <div style={{display: 'flex'}}>
            <Description></Description>
            <Buttons></Buttons>
        </div>
        </>

    );


};
