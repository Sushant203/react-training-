
import './App.css';
import LowerNav from './components/LowerNav';
import UpperNav from './components/UpperNav';
import Layout from './Hoc/Layout/Layout'
import Homepage from './components/pages/homepage'
import Footer from './components/Footer/Footer';
import Sidebar from './components/Naviagtion/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Toolbar/>
      <Sidebar/>
     {/* <Layout> */}
      <Homepage/>
      <Footer/>
     {/* </Layout> */}
    </div>
  );
}

export default App;
