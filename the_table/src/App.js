import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Table from './Table'



function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      setData(data)
    })
  },[])
  //console.log(data);
  const [search , setSearch] = useState("");
  const [updated, setUpdated] = useState("");

  const handleSearch = (e)=>{
    setSearch(e.target.value);
    if(!e.target.value){
      setUpdated("")
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setUpdated(search);
     
    }
  };


  const filterData = data.filter((item)=>{
    return item.title.toLowerCase().includes(updated.toLowerCase());
  })


  const [crntPage, setCrntPage] =  useState(1);
  const recordPage = 5;
  const lastIndext = crntPage * recordPage;
  const firstIndex = lastIndext - recordPage;
  const records = data.slice(firstIndex,lastIndext);
  const npage = Math.ceil(data.length/recordPage);
  console.log(npage,crntPage);
  const numbers = [...Array(npage+1).keys()].slice(1);

  const [showB ,setShowB] = useState(true);
  const [showP, setShowP] = useState(false); 


  const prePage = () =>{
    if(crntPage !== 1){
      setCrntPage(crntPage -1)
    }
    setShowB(true);
    if(crntPage ===2 ){
      setShowP(false);
    }
  }

  const nextPage = () =>{
    if(crntPage !== npage){
      setCrntPage(crntPage+1)
    }
    if(crntPage===npage-1){
      setShowB(false);
    }
    setShowP(true);
  }

  const changePage = (id) =>{
    setCrntPage(id)
    if(crntPage===npage-1){
      setShowB(false);
    }
    if(crntPage ===2 ){
      setShowP(false);
    }
  }
  

  return (
  <div className='App'>
  <header className="myheader">
    {/* <h2 id='thetable'>The Table</h2> */}

    <input type="text" className='search' placeholder="Search Title..." onChange={handleSearch} onKeyDown={handleKeyDown}/>
  </header>
  <br/>
  <main className="main">
    { (updated =="") ? <Table data={data} records={records} setData={setData}/>: <Table data={filterData} records={filterData} setData={setData}/>} 
    
  </main>
  <br/>
   

  {/* <p className='image-area'>Image Area</p> */}

  {/* <div className='image-container'>
  {records.map((i,ind)=><img src={i.image} key={ind} alt={i.title} className='image' />)}
  </div>
  <div className='page-container'>
  </div> */}

    {(updated =="") && <nav>
      <ul className='pagination'>
        {showP && <li>
          <a href='#' className='page-link' 
          onClick={prePage}>Prev</a>  
        </li>}  
        {
          numbers.slice(crntPage-1,crntPage+1).map((n,ind)=><a key={ind} href='#' className={`page-item ${crntPage === n ? 'active' : ''}`}
          onClick={()=>changePage(n)}>{n}</a>)
        }
        {showB && <li>
          <a href='#' className='page-link' 
          onClick={nextPage}>Next</a>  
        </li> } 
      </ul>
    </nav>}

  </div>
  
  );
}

export default App;
