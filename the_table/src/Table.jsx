import React, { useState } from 'react';
import Model from './Model';
import Model2 from './Model2';


const Table = ({data,setData, records}) => {
  
  const [isOpen , setIsOpen] = useState(false);
  const [isOpen1 , setIsOpen1] = useState(false);

  const [id , setId] = useState("");
  const [currentData , setCurrentData] = useState({});

  const handler2 = (id)=>{
    setIsOpen(true);
    setId(id)
    
  }

  const handler1 = (cData) =>{
    setIsOpen1(true);
    setCurrentData(cData)
  }

  return (
    <>
    <table className="table">
      <thead>
      <th id="th">S.No.</th>
      <th id="th">Title</th>
      <th id="th">Image</th>
      <th id="th" >Price</th>
      <th id="th" >Action</th>
      </thead>
      {records.map((data,index)=>{
        return<tbody className={`tr-${index}`} key={index}>
          <td id='td'>{data.id}</td>
          <td id='td'>{data.title}</td>
          <td id='td'><img src={data.image} alt={data.title} className='image' /></td>
          <td id='td'>{data.price}</td>
          <td id='td'>
            <button id='button1' onClick={()=>handler1(data)} >Edit</button>
            <button id='button2' onClick={()=>handler2(data.id)}>Delete</button></td>
        </tbody>
      })}
    </table>
    {isOpen && <Model setIsOpen={setIsOpen} id={id} data={data} setData={setData}/>}
    
    {isOpen1 && <Model2 setIsOpen={setIsOpen1} cData={currentData} data={data} setData={setData}/>}
    </>
  )
}

export default Table