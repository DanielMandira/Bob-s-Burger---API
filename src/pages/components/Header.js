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
      <div className={`${modal} modalContainer`}>
        <div className="modalNome ">
          <p className="textPerson">Digite seu Nome: </p>
          <input
            className="text-xl p-2 rounded-xl border-2"
            type="text"
            placeholder="Digite seu nome"
            name="name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="pageButton" onClick={handleInputChange}>
            Entrar
          </button>
        </div>
      </div>
      <div className="flex bg-white flex-row justify-between items-center p-2 text-center border-red-600 border-2 text-red-600 ">
        <div className="flex">
          <h1 className="text-4xl font-bold">
            Bem vindo,<span className="font-black"> {user}</span>
          </h1>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="/">Home</Link>
          <Link href="/searchPerson">Buscar Personagem</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
