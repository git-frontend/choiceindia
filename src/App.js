import logo from './logo.svg';
import './App.css';
import '../src/assets/css/common.scss'
// import Routing from './Routing';
// import Header from './common-components/Header';
import Footer from './components/Common-features/Footer';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
