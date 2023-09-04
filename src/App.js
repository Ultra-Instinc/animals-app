
import {  useState } from "react";
import AnimalShow from './animalShow';


function getRandomAnimal(){
  const animals=["cow","bird","cat","dog","gator","horse"]  // the array of animals
  return animals[Math.floor(Math.random()*animals.length)]  // we need  to get random number >0 &&   <6
}
function App() {



  const [animals,setAnimals]=useState([])
    
    const handleClick=()=>{
        setAnimals([...animals,getRandomAnimal()])

    }
    
    const renderedAnimals= animals.map( (animal,index)=>{
        return <AnimalShow type={animal} key={index} />
    } )
  return (
    <div className='flex justify-center items-start  w-full bg-gradient-to-b from-black via-slate-800 to-slate-800 min-h-screen h-auto mx-auto'>
      <div className="flex flex-col justify-center items-center">
            <button className=' duration-1000 hover:animate-bounce rounded-md shadow-md shadow-emerald-600 my-10 px-20 py-6 text-gray-200  bg-gradient-to-tr from-cyan-500 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 font-signature text-4xl' onClick={()=>handleClick()}>Add Animal</button>
           <div className='grid gap:10 lg:gap-20 md:grid-cols-2 xl:grid-cols-3'> {renderedAnimals} </div>
            
            
        </div>
    </div>

)
}

export default App;
