import { useState, useEffect } from "react";
import api from "../api/services";
const Counter = () => {
    const [count, setCount] = useState(1);
    const [person, setPerson] = useState(count)
    
    const fetchPerson = async () => {
        try {
          const response = await api.get(`${count}`);
          setPerson(response.data)
        } catch (error) {
          console.error("Error fetching Persons:", error);
          throw error;
        }
      }
      
    useEffect(() => {
        fetchPerson();
    }, [count]);
    return(
        <>
            <div className="flex flex-col h-fit w-full items-center gap-2">
                <h2 className="text-2xl font-bold text-red-600 ">Personagens Aleatorios</h2>
                <div className="flex flex-row gap-2">
                    <button className="countButton" onClick={() => setCount(count + 1)}>Incrementar</button>
                    <button className="countButton" onClick={() =>{ if(count > 1){setCount(count - 1)}else{setCount(1)}} }>Decrementar</button>
                    <button className="countButton" onClick={() => setCount(count * 2)}>Dobrar</button>
                    <button className="countButton" onClick={() => setCount(1)}>Resetar</button>
                </div>
                    <h2 className="text-center text-xl font-bold text-red-600">{count}</h2>
            </div>
            <img src={person.image} className="size-10"></img>
            
        </>
    )
}

export default Counter
