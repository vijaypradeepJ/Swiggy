import React ,{useEffect, useState} from 'react'
import './TopRestaruant.css'
import { TopRestrauntlist } from '../../Data/Data'
import axios from 'axios';

function TopRestaruant() {
    const[restaruantData,setRestaurantData]=useState([]);
    const pathToJsonFile="/data.json";
    const[Restrauntlist,setrestrauntlist]=useState(TopRestrauntlist)
    const[nonveglist,setnonveglist]=useState(Restrauntlist)
    const[veglist,setveglist]=useState(Restrauntlist)
    useEffect (()=>{
        const fetchRestaurantData = async ()=>{
            try{
            const response=await axios.get(pathToJsonFile);
            setRestaurantData(response.data);

            }
            catch(e){
                console.log("Error fetching the data",e);
            }
            

        };
        fetchRestaurantData();

    },[])
    


   const showveg=()=>{
    const type="veg";
    const veg=()=>
        veglist.filter((list)=>
            list.type === type);   
    setrestrauntlist(veg)
    setnonveglist(Restrauntlist)

   }


   const showNonveg=()=>{
      const typeFood="nonveg";
      const nonveg=()=> nonveglist.filter((list)=>list.type === typeFood);
      setrestrauntlist(nonveg);
      setveglist(Restrauntlist)


   }
  return (
    <div>
        <div className="top_restaurant">
        <div className="heading">
             <h2>restaurants with online food delivery in salem</h2>
             <button onClick={showveg} className="sorted">veg</button>
             <button onClick={showNonveg}>Non veg</button>
             
        </div>
        <div class="container3">
        {restaruantData.map(({restraunt,address1,address2,Image,type},index) =>(
            <div class="cards" key={index}>
                <img src={Image} alt={Image} />
             
            <div class="offers">
               
                </div>
            <h2>{restraunt}</h2>
            <h3><span >{'\u9733'}</span>3.9 {'\u2022'} 35-40 mins</h3>
            <h2>{type}</h2>
          
            <p>{address1}</p>
            <p>{address2}</p>
            </div>

            ))}
            
            
           </div>
           </div>

    </div>
  )
}

export default TopRestaruant