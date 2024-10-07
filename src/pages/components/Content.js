import React, { useState, useEffect } from "react";
import api from "../api/services";

const itemsPerPage = 12;

const Content = (props) => {
  const [modal, setModal] = useState("hidden")
  const [persons, setPersons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [personId, setPersonId] = useState(1);
  const [person, setPerson] = useState(personId);

  const fetchPerson = async () => {
    try {
      const response = await api.get(`${personId}`);
      setPerson(response.data);
    } catch (error) {
      console.error("Error fetching Persons:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPerson();
  }, [personId]);

  const fetchPersons = async () => {
    try {
      const response = await api.get();
      setPersons(response.data);
      setTotalItems(response.data.length);
    } catch (error) {
      console.error("Error fetching Persons:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);
  const displayPerson = persons.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className={`${modal} modal`}>
        <p className="absolute text-2xl top-0 right-2 text-red-600 cursor-pointer" onClick={()=>{
          if(modal==="flex"){
            setModal("hidden")
          }
        }}>X</p>
        <div className="flex flex-row gap-2 mt-3">
        <img className="w-80 h-80" src={person.image}/>
        <div className="flex flex-col gap-4">
        <p className="textPerson">Name: <span className="font-normal">{person.name}</span></p>
        <p className="textPerson">Gender: <span className="font-normal">{person.gender}</span></p>
        <p className="textPerson">Hair: <span className="font-normal">{person.hair}</span></p>
        <p className="textPerson">Occupations: <span className="font-normal">{person.allOccupations}</span></p>
        <p className="textPerson">First Episode: <span className="font-normal">{person.firstEpisode}</span></p>
        </div>
        </div>
      </div>
      <div className="py-3">
        <div
          className={`${
            props.list == "list"
              ? "flex flex-row justify-center "
              : "flex flex-col "
          }flex-wrap gap-1`}
        >
          {displayPerson.map((person) => (
            <div
              className={`${
                props.list == "list" ? "w-96 " : "flex flex-row w-full"
              }border rounded-lg gap-2 flex flex-col justify-self-center  cursor-pointer items-center p-2 bg-white`}
              key={person.id}
              onClick={() => {
                setPersonId(person.id)
                if(modal === "hidden"){
                setModal("flex")
              }}}
            >
              <h1 className="text-red-600 text-2xl font-seminormal">
                {person.name}
              </h1>
              <img
                className={`${props.list == "list" ? "size-52" : "w-20"}`}
                src={person.image}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-evenly p-3">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "opacity-40 cursor-no-drop " : "opacity-100 "
            }pageButton`}
          >
            Previous
          </button>
          <p className="text-lg  text-red-600">
            Page <span className="font-normal"> {currentPage} </span> of{" "}
            <span className="font-normal"> {totalPages} </span>
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "opacity-40 cursor-no-drop "
                : "opacity-100 "
            }pageButton`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Content;
