import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
const Login= () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resposne => resposne.json())
      .then(data => setRecords(data))
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div class='nav-bar' style={{ backgroundcolor: 'lightblue',
  width: '1280',
  height: '575px',
  border: '10px solid lightblue'}}>
    <center>
        <div class='bar' style={{
  border: '10px solid white',
  backgroundcolor: 'white',
} }>
  <center>
          <div className='bar1'>
            <h3 style={{ marginLeft: '120px', border: '30px' }}>select an account</h3>
          </div>
          <div style={{ display: 'flex' ,marginLeft:'540px'}}>
            <div style={{ display: 'inline' }}>

              <div style={{ marginTop: '10px' }}>

                <button onClick={() => navigate('/home')}>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" style={{ borderRadius: "50%", height: '30px', width: '40px' }} />
                </button>
                
              </div>
              <div style={{ marginTop: '0px' }}>
                <button onClick={() => navigate('/home1')}>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{ borderRadius: "50%", height: '30px', width: '40px' }} />
                </button>
              </div>
              <div style={{ marginTop: '0px' }}>            <button onClick={() => navigate('/home2')}>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg" style={{ borderRadius: "50%", height: '30px', width: '40px' }} />
              </button></div>
              <div>    <button onClick={() => navigate('/home3')}>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg" style={{ borderRadius: "50%", height: '30px', width: '40px' }} />
              </button></div>
              <div>
                <button onClick={() => navigate('/home4')}>


                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg" style={{ borderRadius: "50%", height: '30px', width: '40px' }} />
                </button></div>
              <div><button onClick={() => navigate('/home5')}>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1006.jpeg" style={{ borderRadius: "50%", height: '30px', width: '40px' }} />
              </button></div>

              <div> <button onClick={() => navigate('/home6')}>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1007.jpeg" style={{ borderRadius: "50%", height: '30px', width: '40px' }} />
              </button></div>
              <div style={{ marginTop: '0px' }}> <button onClick={() => navigate('/home')}>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1008.jpeg" style={{ borderRadius: "50%", height: '30px', width: '40px' }} />
              </button></div>
              <div style={{ marginTop: '0px' }}><button onClick={() => navigate('/home')}>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1009.jpeg" style={{ borderRadius: "50%", height: '30px', width: '40px' }} />
              </button></div>
            </div>
            <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
              {records.map((list, index) => (
                <a href=''>
                  <div style={{ marginTop: '15px' }} onClick={() => navigate('/home')}>{list.name}</div></a>
              ))
              }
            </div>
          </div>
          </center>
        </div>
        </center>
      </div>
    </div>
  );
}
export default Login;
