import { useState } from "react";
import Content from "./Content";
const Home = () => {
  const [list, setList] = useState("list");
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col relative">
          <h2 className="text-4xl font-bold text-center text-red-600 p-3 underline ">
            Bob's Burguer
          </h2>
          <img
            src={`${list == "list" ? "/list.svg" : "block.svg"} `}
            className=" size-10 absolute bottom-2 right-2 "
            onClick={() => setList(list == "list" ? "block" : "list")}
          />
        </div>
        <Content list={list} />
      </div>
    </>
  );
};

export default Home;
