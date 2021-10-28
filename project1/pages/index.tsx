import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Banner from "../components/home/Banner";

const Home: NextPage = () => {
  const [text, setText] = useState("View stores nearby");
  const onClickHandler = () => {
    setText((prevText) => {
      if (prevText === "View stores nearby") {
        return "Loading...";
      }
      return "View stores nearby";
    });
  };
  return (
    <div>
      <Head>
        <title>Coffee Connoisseur</title>
      </Head>
      <main>
        <Banner buttonText={text} handleOnClick={onClickHandler} />
      </main>
    </div>
  );
};

export default Home;
