import React, { useEffect, useState } from 'react';
import './css/Style.css'

 function Tempapp() {
  
  const [city, setCity] = useState(null);
  const [search, setSearch]= useState("Mumbai")
  
  useEffect(()=>{
    const fetchApi=async()=>{
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ea98ef5f133ca50e86dc9f2cf752b860`
      const response = await fetch(url);
      const resJson= await response.json();
      setCity(resJson.main);
     // console.log(resJson)
    }
    fetchApi();
  },[search])
  return (
    <>
<div className="box">
          <div className='inputeData'>
             <input type="Search"
              value={search}
                onChange={(event)=>{ setSearch(event.target.value)

                }}
             /> 
            </div>
            {
              !city ?( <p className='errormsg'>No Data Found</p>

              ):(
            <div>
    <div className='info'>
       <h2 className='location'> 
          <i className="fas fa-street-view"></i> {search} 
       </h2>
       <h1 className='temp'>
         {city.temp}°C
        </h1>
      <h4 className='max'>
       Min : {city.temp_min}°C | Max : {city.temp_min}°C
      </h4>
    </div>
    <div className='wave-one'></div>
    <div className='wave-two'></div>
    <div className='wave-three'></div>
    </div>
            )}
            </div>
    </>
  );
}
export default Tempapp
