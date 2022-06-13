import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects';

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
          <Route path='/portfolio/' element={<Home />} />
          <Route path='/portfolio/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
