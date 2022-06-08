import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, springgreen, seagreen)
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
