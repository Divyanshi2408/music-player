import React from 'react'
import "./homepage.css"
import m1Image from '../assets/images/m1.png';
import Button from '../components/button';

export const HomePage = () => {
    const handleButtonClick = () => {
        // redirect logic here
      };
 return (
<section className='wrapper'>
    <div className='container'>
        <div className='head'>
            <h1>All the <span>Best Songs</span><br/>
            in One Place</h1>
        </div>
        <div className='para'>
            <p>On our website, you can access an amazing
             collection of popular and new songs. Stream your 
             favorite tracks in high quality and enjoy without 
             interruptions. Whatever your taste in music, 
             we have it all for you! </p>
        </div>
        <div className='btn'>
        <Button label="Discover now" onClick={handleButtonClick} />
        <Button  label="Create palylist" onClick={handleButtonClick} className="create-button" />
        </div>
</div>
    <div className='image'>
        <img src={m1Image} alt ='myimage'></img>
    </div>
    
</section>
 )}
