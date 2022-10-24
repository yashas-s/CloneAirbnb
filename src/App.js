import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components';
import Displaycard from './components/cards';
import Container from 'react-bootstrap/Container';
import TopCard from './components/topcard';

function App() {
  return (
   <>
   <Header/>
   <Container className="container-padding" fluid>
    <h1 className='mt-5'>New This Week</h1>
      <TopCard/> 
      <Displaycard/>
   </Container>
   </>
   
  );
}

export default App;
