"use client";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";


export default function Home() {

const[city,setCity] = useState('');
const [weather, setWeather] = useState ({});
const[loading, setLoading] = useState (false);

const url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

const fetchWeather = (e) => {
  e.preventDefault()
  setLoading(true)
  axios.get(url).then((response) => {
    setWeather(response.data)
    console.log(response.data)

  }) 
  setCity('');
  setLoading(false);
}

  return (

<main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
  
          <button onClick={fetchWeather}>Fetch data</button>
        
        </div>
       
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-blac bg-black/95 z-[1]'>
        <Image 
  src="/paysage.jpg"
  alt="plan arrière"
  layout="fill"
  objectFit="cover"
  
/>
{/*search*/}
<div className="relative flex justify-between max-w-[500px] w-full m-auto pt-4 text-white z-10">
  <form className="flex justify-between items-center w-full m-auto bg bg-transparent border border-gray-300 text-white rounded-2xl">
    <div>
      <imput className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text' type="text" placeholder='search city'/>
    </div>
    <button onClick={fetchWeather }> Search city </button>
  </form>
</div>
        </div>
       
      </div>

    </main>
  );
}
