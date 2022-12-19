import { useState } from 'react';
import './App.css';
import Layout from './Hoc/Layout/Layout'
import Homepage from './components/pages/homepage'
import Footer from './components/Footer/Footer';
import Sidebar from './components/Naviagtion/Sidebar/Sidebar';
import Toolbar from './components/Naviagtion/Toolbar/index';

function App() {
  const [Show,setShow]=useState(false)
  const showSidebar = () => { 
    setShow(!Show)
    setShow(previous=>{
      return !previous
    }   
    )
   }
  return (
    <div>
      <Toolbar/>
      {Show?<Sidebar/>:""}
     <Layout>
      <Homepage/>
      <Footer/>
     </Layout>
    </div>
  );
}

export default App;
