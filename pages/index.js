import Head from "next/head";
import { useState } from "react";
import AskQuestion from "./api/generate-something";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [animalResult, setAnimalResult] = useState();

  

  async function onSubmitAnimal(event) {
    event.preventDefault();
    const response = await fetch("/api/generate-animal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setAnimalResult(data.result);
    setAnimalInput("");
  }

  

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Name my pet</h3>
        <form onSubmit={onSubmitAnimal}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{animalResult}</div>

       <AskQuestion/>
      </main>
    </div>
  );
}
