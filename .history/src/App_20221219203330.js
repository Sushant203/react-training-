
import './App.css';
import LowerNav from './components/LowerNav';
import UpperNav from './components/UpperNav';
import Layout from './Hoc/Layout/Layout'
import Homepage from './components/pages/homepage'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Toolbar/>
      
     {/* <Layout> */}
      <Homepage/>
      <Footer/>
     {/* </Layout> */}
    </div>
  );
}

export default App;
