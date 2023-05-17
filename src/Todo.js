import React, { useState } from 'react'

export default function Todo() {


    const[activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);

// to add lists
    function addActivity(){
    //   setListData([...listData, activity])
    //   console.log(listData);
      setListData((listData)=>{
        const updatedList = [...listData, activity];
        console.log(updatedList)
        setActivity("")
        return updatedList
      })
    }

// to remove each list one by one
      function removeActivity(i){
       const updatedListData = listData.filter((element, id)=>{
        return i!= id
       })
       setListData(updatedListData)
      }
    
      // to remove all lists 
      function removeAll(){
      setListData([])
      }


  return (
    <>
    <div className='container'>
    <div className='header'>TODO LIST </div>
     <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=> setActivity(e.target.value)}/>
     <button onClick={addActivity}>ADD</button>
     <p className='List-heading'> Here is Your List:{")"}</p>
     {listData!=[] && listData.map((data, i)=>{
        return(
            <>
            <p key={i}>
            <div className='listData'>{data}</div>
            <div className='btn-position'>
            <button onClick={()=>removeActivity(i)}>Remove</button>
            </div>
            </p>
            </>
        )
     })}
     {listData.length >=1 && <button onClick={removeAll}>Remove All</button>}
    </div>
    </>
  )
}
