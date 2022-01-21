import  { useState } from 'react';
import { homework6 } from './homework6';
import './App.css';

function App() {
 const [hotels, setHotels] = useState(homework6);
 const [showMore, setShowMore] = useState(false);

 const removeHotels = (id)=>{
     let newHotels = hotels.filter(hotels=>hotels.id !==id);
     setHotels(newHotels)
 }

    return(
        <div>
            <div className='header'>
            <h1>Топ  {hotels.length} лучших отелей Сочи.</h1>
            </div>

<div>
{hotels.map((item=>{
    const{id, hotelName, description, image, source}=item;
    return(
        <div key={id} className='card'>
        <img src={image} width='auto' height='250px' alt='foto' className='foto'/>
        <div className='descript'>
<div className='header'>
<h2>{hotelName}</h2>
</div>
<p>{showMore ? description : description.substring(0, 200) +"..."} 
<button onClick={()=>setShowMore(!showMore) } className='butt'>{showMore ? "Показать меньше" : "Показать больше"} </button>
</p>
<p>Источник: {source} </p>
<div className='header'>
    <button onClick={()=> removeHotels(id) } className='btn'>Удалить </button>
    </div>


        </div>
        </div>
    )
}))}
</div>
    <div className='header'>
    <button onClick={()=> setHotels([]) } className='btn'> Очистить список </button>
    </div>

</div>
    )

}
export default App;

