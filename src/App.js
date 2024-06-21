import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Homepage1 from './components/Homepage1';
import Homepage2 from './components/Homepage2';
import Homepage3 from './components/Homepage3';
import Homepage4 from './components/Homepage4';
import Homepage5 from './components/Homepage5';
import Homepage6 from './components/Homepage6';

const App = () => {
  const[records,setRecords] = useState([])
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(resposne=> resposne.json())
    .then(data=>setRecords(data))
   },[])
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/home1" element={<Homepage1/>} />
        <Route path="/home2" element={<Homepage2/>} />
        <Route path="/home3" element={<Homepage3/>} />
        <Route path="/home4" element={<Homepage4/>} />
        <Route path="/home5" element={<Homepage5/>} />
        <Route path="/home6" element={<Homepage6/>} />
   

        
      </Routes>
      </BrowserRouter>
  
      </div>
  );
}
export default App;
