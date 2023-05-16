import React, { useState } from 'react';
import  './Model.css';

const Model = ({setIsOpen, cData,data,setData}) => {
  const handleInput1 =(e) =>{
    const newData = data.map((itm)=>(
        itm.id === cData.id ? {...itm, title: e.target.value } : itm
        // {...itm , [e.target.name] : [e.target.value]} : itm
        
    ))
    setData(newData)
  }
  const handleInput2 =(e) =>{
    const newData = data.map((itm)=>(
        itm.id === cData.id ? {...itm, price: e.target.value } : itm
        // {...itm , [e.target.name] : [e.target.value]} : itm
        
    ))
    setData(newData)
  }
  const handleInput3 =(e) =>{
    const newData = data.map((itm)=>(
        itm.id === cData.id ? {...itm, image: e.target.value } : itm
        // {...itm , [e.target.name] : [e.target.value]} : itm
        
    ))
    setData(newData)
  }

  const handleryes = (e)=>{

  setIsOpen(false);
  }
 

  return (
<>
<div className='modal-wraper1' >
</div>

  <div className="modal-container1">
    {/* <p className='praDelete1'>Do you want to edit data ?</p> */}
    <div className='text-field'>
        <input type='text' name='title' className='title' placeholder='Title'  onChange={handleInput1}/>
        <input type='text' name='image' className='image-edit' placeholder='Image Url'  onChange={handleInput3}/>
        <input type='text' name='price' className='price' placeholder='Price'  onChange={handleInput2}/>
    </div> 
        
        <br/>
    <span className='multi-button'><button className='cancel1' onClick={()=>setIsOpen(false)}>cancel</button>
    <button  className='yes1' onClick={handleryes}>Update</button></span>
  </div>

  </>
  )
}

export default Model