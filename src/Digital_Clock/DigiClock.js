import React,{useState} from 'react';
import './DigiClock.css'

const DigiClock = () => {
    const[date,setDate] = useState()

  setInterval(() => {
    let digi = new Date().toLocaleString()
    setDate(digi)
  },1000);

  return (
    <>
    <h1 className='text'>DIGITAL CLOCK</h1>
<h1 className='main' style={{display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    // height:'100px',
    // width:'400px',
    fontSize: '50px',
    fontWeight:'normal',
    borderRadius: '80px',
    color:'wheat'}}>{date}</h1>
        </>
  )
};

export default DigiClock;
