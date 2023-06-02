import React, { useEffect, useState } from 'react';
import './App.css';
import { BsTelephone } from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import { BsLinkedin } from 'react-icons/bs';
import EllipsisText from "react-ellipsis-text";
import axios from 'axios';

window.React = React;


function App() {
  const [data, setData] = useState([]); 

  useEffect(()=>{
    axios.get('http://localhost:8000/profile')
    .then((res)=>setData(res.data))
  },[])

  return (
    <div className='app'>
      {data.length>0?
      data.map((item,index)=>
      <div className="business-card" key={index}>
      <div className='intro-section'>
        <h2>{item.name}</h2>
        <span style={{fontSize:'1.2rem'}}><a href={`tel:${item.phone_number}`}><BsTelephone/></a></span>
        <span><a href={`mailto:${item.personal_email}`}><HiOutlineMail/></a></span>
        <span className='line'></span>
        <span ><a href={item.linkedIn} style={{color:'#2866b1'}}><BsLinkedin/></a></span>
      </div>
      <div className='title-intro intro-section'>
        <p><b>{item.current_title}</b></p>
        <span></span>
        <p style={{color:'lightslategrey'}}>{item.location}</p>
      </div>
      <div className='x-line'></div>
      <div className='details'>
        <div className='exp-details'>
          <div>Experience</div>
          <div>
            {item.experience.map((item)=>
              <div className='name-details intro-section' key={item.id}>
              <div></div>
                <img src={item.img} height='25px' width="25px" />
                <p ><EllipsisText text={item.title} length={47} /></p>
              </div>
            )}
          </div>
        </div>
        <div className='exp-details edu-details'>
          <div>Eductaion</div>
          <div>
          {item.education.map((item)=>
              <div className='name-details intro-section' key={item.id}>
              <div></div>
                <img src={item.img} height='25px' width="25px" />
                <p ><EllipsisText text={item.title} length={50} /></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
      )
      :
      <div className='loading'>Loading....</div>}
    </div>
  );
}

export default App;
