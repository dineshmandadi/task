import React from 'react';
import '../App.css';
import { useEffect,useState } from 'react';
const Homepage5= () => {
  const[record,setRecord] = useState([])
  const [modeldata,setModeldata]  = useState({
  })
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users/')
       .then(resposne=> resposne.json()) 
       .then(res=>setRecord(res[5]))
   }
   useEffect(() => {
      getData();
   },[])
  console.log(record)
  return (
   <div class='nav-bar' style={{display:'flex'}}>
    <div className='bar1' style={{backgroundColor:'blue',height:'590px',width:'300px',border:'2px solid blue',borderRadius:'30px'}}>
      <center>
      <h3 style={{marginTop:'200px',color:'white'}}>Profile</h3>
      <hr color='white'></hr>
      <h3 style={{color:'white'}}>posts</h3>
      <hr color='white'></hr>
      <h3 style={{color:'white'}}>Gallery</h3>
      <hr color='white'></hr>
      <h3 style={{color:'white'}}>To Do</h3>
      <hr color='white'></hr>
      </center>
    </div>
    <div class='bar2' style={{backgroundColor:'white',border:'2px solid white',width:'1000px'}}>
      <div style={{display:'flex'}}>
    <h3 style={{marginLeft:'50px'}}>Profile</h3>
   <a href='#img'><img onClick='this.dinesh'src='https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1006.jpeg'   style={{width:'30px',height:'30px',borderRadius:'20px',marginLeft:'700px',marginTop:'20px'}}></img></a>
    <h5 style={{margintop:'20px',marginLeft:'5px'}}>Mrs. Dennis Schulist</h5>
    </div>
    <hr style={{width:'940px'}}></hr>
    <div className='pra' style={{marginLeft:'100px'}}>
    <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1006.jpeg" style={{height:"150px",width:"150px",borderRadius:"50%"}}></img>
</div>
    <div className="prav" style={{marginLeft:'100px'}}>
      <b style={{fontSize:'20px'}}>Mrs. Dennis Schulist</b>  
<li><b>Name    :</b>{record.id}</li>
<li><b>username :</b>{record.name}</li>
<li><b>Phone   :</b>{record.phone}</li>
<li><b>Website :</b>{record.website}</li>
</div>
<hr style={{width:'500px',marginRight:'420px'}}></hr>
<div style={{marginLeft:'100px'}}><b style={{fontSize:'20px'}}>Company</b>
<li><b>Name    : </b>Romaguera-Crona</li>
<li><b>catchphrase:</b>Multi-layered client-server neural-net</li>
<li><b>bs:</b>harness real-time e-markets</li>
<li><b>Website :</b>hildegard.org</li>
</div>
<hr style={{width:'500px',marginRight:'420px'}}></hr>
  </div>
     </div>
  );
}
export default Homepage5;