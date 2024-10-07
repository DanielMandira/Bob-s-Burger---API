import { useState } from "react";
const Header = () => {
  const [user, setUser] = useState("");
  const [modal, setModal] = useState("flex");
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
          />
          <button
            className="pageButton"
            onClick={() => {
              {
                if (modal === "flex") {
                  setModal("hidden");
                }
              }
              setUser(document.querySelector('input[name="name"]').value);
            }}
          >
            Entrar
          </button>
        </div>
      </div>
      <div className="flex bg-white flex-row justify-start p-2 text-center border-red-600 border-2 text-red-600 ">
        <h1 className="text-4xl font-bold">
          Bem vindo,<span className="font-black"> {user}</span>
        </h1>
      </div>
    </>
  );
};

export default Header;
