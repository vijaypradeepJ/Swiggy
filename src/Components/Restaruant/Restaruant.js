import React, { useEffect, useRef, useState } from 'react'
import './Restaruant.css'
import { RestaruantList } from '../../Data/Data'
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";
import axios from "axios";


function Restaruant() {
  const [restaurantData,setRestaurantData]=useState([]);
  const pathToJsonFile='../../Data/Data.json';
  const scrollReference=useRef(null);
  const width=500;
  const padding=10;
  useEffect(()=>{
    const fetchRestaurantData=async()=>{
      try{
        const response=await axios.get(pathToJsonFile);
        setRestaurantData(response.data);
      }
      catch(e){
        console.log("Error fetching the Data",e)
      }
    };
    fetchRestaurantData();

  },[])

  const handleArrowLeft=()=>{
    if(scrollReference.current){
      
      scrollReference.current.scrollBy({
        left: -width+padding,
        behavior:"smooth",
      })

    }
    

  }
  const handleArrowRight=()=>{
    if(scrollReference.current){
      
      scrollReference.current.scrollBy({
        left: +width+padding,
        behavior:"smooth",
      })

    }
    

  }
  return (
    <>
         <header>
        <div class="header">
        <h2>top restaurant chains in salem</h2>
        <div class="select">
        <button onClick={handleArrowLeft}><FaArrowLeft/></button>
        <button onClick={handleArrowRight}><FaArrowRight/></button>
        </div>
        </div>
    </header>
    <div className="container2" ref={scrollReference}>
    {restaurantData.map((list)=>(
      <div className="cards">
      <img src={list.Image}/>
      <div className="offers">
          
      </div>
      <h2>{list.restaruant}</h2>
     
      <p>{list.address1}</p>
      <p>{list.address2}</p>
     </div>
     

    ))}
    </div>
    </>

  )
}

export default Restaruant