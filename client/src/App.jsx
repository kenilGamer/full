/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(()=>{
    fetchData()
  },[])

async function fetchData () {
 const response = await fetch('/api/dd');
 const data = await response.json()
 console.log(data)
 setData(data.username)
}

  return (
  <>
  <div className='bg-red-400'>
  {for(let elem in data){
    <h></h>
  }  }
  </div>
  </>
  );
}

export default App;              
