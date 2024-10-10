import { document } from "postcss";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState("");
  const [modal, setModal] = useState("flex");
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("userName");
      if (savedUser) {
        setUser(savedUser);
        setModal("hidden");
      }
    }
  }, []);

  const handleInputChange = () => {
    setUser(inputValue);
    if (typeof window !== "undefined") {
      localStorage.setItem("userName", inputValue);
    }
    setModal("hidden");
  };

  return (
    <>
      <ModalInput modal={modal} inputValue={inputValue} setInputValue={setInputValue} handleInputChange={handleInputChange} />
      <section className="NavBar">
        <div className="flex">
          <h1 className="text-4xl font-normal">
            Bem vindo, <span className="font-semibold underline">{user}</span>
          </h1>
        </div>
        <div className="flex flex-row gap-3">
          <Link className="navLink" href="/">Home</Link>
          <Link className="navLink" href="/searchPerson">Buscar Personagem</Link>
        </div>
      </section>
    </>
  );
};

export default Header;

const ModalInput = ({modal, inputValue, setInputValue, handleInputChange}) => {
  return(
    <section className={`${modal} modalInput`}>
    <div className="modalNome ">
      <input
        className="inputName"
        type="text"
        placeholder="Digite seu nome"
        name="name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="buttomName" onClick={handleInputChange}>
        Entrar
      </button>
    </div>
  </section>
  )
}
