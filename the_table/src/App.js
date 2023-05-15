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
  const [search , setSearch] = useState("");

  const handleSearch = (e)=>{
    setSearch(e.target.value);
  }

  const filterData = data.filter((item)=>{
    return item.title.toLowerCase().includes(search.toLowerCase());
  })


  const [crntPage, setCrntPage] =  useState(1);
  const recordPage = 4;
  const lastIndext = crntPage * recordPage;
  const firstIndex = lastIndext - recordPage;
  const records = data.slice(firstIndex,lastIndext);
  const npage = Math.ceil(data.length/recordPage);
  const numbers = [...Array(npage+1).keys()].slice(1);

  const prePage = () =>{
    if(crntPage !== 1){
      setCrntPage(crntPage -1)
    }
  }
  const nextPage = () =>{
    if(crntPage !== npage){
      setCrntPage(crntPage+1)
    }
  }
  const changePage = (id) =>{
    setCrntPage(id)
  }
  

  return (
  <div className='App'>
  <header className="myheader">
    {/* <h2 id='thetable'>The Table</h2> */}

    <input type="text" className='search' placeholder="Search Title..." onChange={handleSearch}/>
  </header>
  <br/>
  <main className="main">
    { (search=="") ? <Table data={data} setData={setData}/>: <Table data={filterData} setData={setData}/>} 
    
  </main>
  <br/>
   

  <p className='image-area'>Image Area</p>

  <div className='image-container'>
  {records.map((i,ind)=><img src={i.image} key={ind} alt={i.title} className='image' />)}
  </div>
  <div className='page-container'>
  </div>

    <nav>
      <ul className='pagination'>
        <li>
          <a href='#' className='page-link' 
          onClick={prePage}>Prev</a>  
        </li>  
        {
          numbers.map((n,ind)=><a key={ind} href='#' className={`page-item ${crntPage === n ? 'active' : ''}`}
          onClick={()=>changePage(n)}>{n}</a>)
        }
        <li>
          <a href='#' className='page-link' 
          onClick={nextPage}>Next</a>  
        </li>  
      </ul>
    </nav>

  </div>
  
  );
}

export default App;
