import { useState } from 'react'
import bird from './assets/bird.svg'
import cat from './assets/cat.svg'
import cow from './assets/cow.svg'
import dog from './assets/dog.svg'
import gator from './assets/gator.svg'
import heart from './assets/heart.svg'
import horse from './assets/horse.svg'

const svgMap={
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

const AnimalShow = ({type}) => {
    
    const [clicks,setClicks]=useState(0)

    const handleClick = ()=>{
        setClicks(clicks+1)
    }
    return ( 
        <div className='flex  h-[300px] w-[300px]' onClick ={handleClick}>
            <img className=' z-0 h-[300px] w-[300px] ' src={svgMap[type]} alt="Animal SVG" />
            <img className=' z-10 relative translate-x-[-285px]  p-1 max-w-[280px] opacity-80' src={heart} alt="Heart" style={{width: 10+10*clicks +'px'}}
            />
        </div>
     );
}
 
export default AnimalShow;