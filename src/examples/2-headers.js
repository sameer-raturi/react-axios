import { useState } from "react";
import { fetchDadJoke as fetchDadJokeAction } from "./actions";

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchDadJoke = async () => {
    const _joke = await fetchDadJokeAction();
    setJoke(_joke.joke);
  };

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;
