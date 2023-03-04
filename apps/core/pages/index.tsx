import type { NextPage } from "next";
import { message } from "antd";

const Index: NextPage = () => {
  const handleClick = () => {
    message.info("Because everyday is a Caturday.");
  };

  return (
    <section id="content">
      <div className="grid min-h-screen place-content-center">
        <h1 className="text-primary-500 text-3xl">Meowpedia 🐈</h1>
        <button type="button" className="btn-gradient" onClick={handleClick}>
          Click Me
        </button>
      </div>
    </section>
  );
};

export default Index;
