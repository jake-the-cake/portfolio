import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar';

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
      <div>Content goes here</div>
    </Container>
  );
}

export default App;
