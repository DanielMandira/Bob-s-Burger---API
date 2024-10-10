import { useState } from "react";
import Content from "./Content";
const Home = () => {
  const [list, setList] = useState("list");
  return (
    <>
      <section className="homeContainer">
          <h2 className="titleHome">
            Bob's Burguer Persons
          </h2>
        <Content list={list} />
      </section>
    </>
  );
};

export default Home;
