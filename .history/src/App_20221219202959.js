
import './App.css';
import LowerNav from './components/LowerNav';
import UpperNav from './components/UpperNav';
import Layout from './Hoc/Layout/Layout'
import Homepage from './components/pages/homepage'
function App() {
  return (
    <div>
     {/* <Layout> */}
      <Homepage/>
     {/* </Layout> */}
    </div>
  );
}

export default App;
