import React, { useState } from 'react';
import  './Model.css';

const Model = ({setIsOpen, id,data,setData}) => {


  const handleryes = ()=>{

    const fiterData = data.filter((item)=>{
    
      return item.id != id;
    });
    
  setData(fiterData)

  setIsOpen(false);
  }
 

  return (
<>
<div className='modal-wraper' >
</div>

  <div className="modal-container">
    <p className='praDelete'>Do you want to delete data ?</p>
    <span className='multi-button'><button className='cancel' onClick={()=>setIsOpen(false)}>cancel</button> <button  className='yes' onClick={handleryes}>yes</button></span>
  </div>

  </>
  )
}

export default Model