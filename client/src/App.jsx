import './App.css';
import styled from 'styled-components'
import Nav from './components/Nav';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects';
import { useEffect, useState } from 'react';
import HireMe from './pages/HireMe';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/portfolio/' element={<Home title='home' />} />
          <Route path='/portfolio/projects' element={<Projects title='projects' />} />
          <Route path='/portfolio/hire-me' element={<HireMe title='hire-me' />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
