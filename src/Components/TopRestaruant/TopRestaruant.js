import React ,{useState} from 'react'
import './TopRestaruant.css'
import { TopRestrauntlist } from '../../Data/Data'

function TopRestaruant() {
    const[Restrauntlist,setrestrauntlist]=useState(TopRestrauntlist)
    const[nonveglist,setnonveglist]=useState(Restrauntlist)
    const[veglist,setveglist]=useState(Restrauntlist)


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
        {TopRestrauntlist.map((list) =>(
            <div class="cards">
                <img src={list.Image} alt={list.Image} />
             
            <div class="offers">
               
                </div>
            <h2>{list.title}</h2>
            <h3><span >{'\u9733'}</span>3.9 {'\u2022'} 35-40 mins</h3>
            <h2>{list.type}</h2>
          
            <p>{list.address1}</p>
            <p>{list.address2}</p>
            </div>

            ))}
            
            
           </div>
           </div>

    </div>
  )
}

export default TopRestaruant