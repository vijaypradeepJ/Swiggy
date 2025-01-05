import React, { useRef } from 'react'
import {Foodimg} from "../../Data/Data"
import { FaArrowLeft , FaArrowRight } from "react-icons/fa";
import './Home.css'

function Home() {
  const scrollReference = useRef(null);
  const width=500;
  const padding=10;
  
  const handleArrowRightClick=()=>{
    
    if (scrollReference.current) {
      
      scrollReference.current.scrollBy({
        left: -width+padding,
        behavior: 'smooth', 
      });
    }

  };

  const handleArrowLeftClick=()=>{
  
   if(scrollReference.current){
      
    scrollReference.current.scrollBy({
      left: +width+padding,
      behavior:'smooth',
    });
   }
 

  };
  
  return (
    <div>
         <>
         <header>
        <div class="header">
        <h2>what's on your mind?</h2>
        <div class="select">
        <button onClick={handleArrowRightClick}><FaArrowLeft/></button>
        <button onClick={handleArrowLeftClick}><FaArrowRight/></button>
        
        
        </div>
        </div>
    </header>
       
       <div className="container" ref={scrollReference} >
      
         {Foodimg.map((food)=>(
           
            <img src={food.foodimg} alt=""/>
            
            
   
         ))}
         
               
   
           
           
       </div>
       </>
    </div>
  )
}

export default Home