import logo from './logo.svg';
import './App.css';
import Routing from './Routing';
import Header from './common-components/Header';
import Footer from './common-components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routing></Routing>
      <Footer></Footer>
    </div>
  );
}

export default App;
