// Este componente Counter é responsável por gerenciar um contador que, ao ser incrementado ou decrementado, faz uma requisição a uma API para buscar dados de um personagem aleatório.
import { useState, useEffect } from "react";
import api from "../api/services";
const Counter = () => {
  // O estado 'count' é utilizado para controlar o valor do contador, enquanto 'person' armazena os dados do personagem retornados pela API.
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState(count);

  // A função fetchPerson é chamada sempre que o valor de 'count' muda, utilizando o hook useEffect para realizar a chamada assíncrona à API.
  const fetchPerson = async () => {
    try {
      const response = await api.get(`${count}`);
      setPerson(response.data);
    } catch (error) {
      console.error("Error fetching Persons:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPerson();
  }, [count]);
  // O componente renderiza botões para incrementar, decrementar, dobrar e resetar o contador, além de exibir o valor atual do contador e a imagem do personagem correspondente.
  return (
    <>
      <div className="flex flex-col h-fit w-full items-center gap-2">
        <h2 className="text-2xl font-bold text-red-600 ">
          Personagens Aleatorios
        </h2>
        <div className="flex flex-row gap-2">
          <button className="countButton" onClick={() => setCount(count + 1)}>
            Incrementar
          </button>
          <button
            className="countButton"
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              } else {
                setCount(1);
              }
            }}
          >
            Decrementar
          </button>
          <button className="countButton" onClick={() => setCount(count * 2)}>
            Dobrar
          </button>
          <button className="countButton" onClick={() => setCount(1)}>
            Resetar
          </button>
        </div>
        <h2 className="textPerson">{count}</h2>
      </div>
      <div className="flex flex-row justify-center w-full p-3 gap-2">
        <img src={person.image} className="size-72 bg-white"/>
        <div className="flex flex-col gap-2">
          <p className="textPerson">
            {person.name}
          </p>
          <p className="textPerson">
            {person.gender}
          </p>
          <p className="textPerson">
            {person.hair}
          </p>
          <p className="textPerson">
            {person.allOccupations}
          </p>
          <p className="textPerson">
            {person.firstEpisode}
          </p>
        </div>
      </div>
    </>
  );
};

export default Counter;
