import React from 'react';
import { LeftContainer } from './LeftContainer';
import { MainContainer } from './MainContainer';
import { Container } from './styles';



export const MainApp: React.FC = () => {
  return (

    <Container>
        <LeftContainer/>
        <MainContainer/> 
    </Container>
  );
}

