import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😎": "attitude",
  "😔": "sad",
  "🥶": "so cold",
  "❤️": "love",
  "😑": "annoyance",
  "🌟": "start",
  "😇": "feeling blessed",
  "🤯": "unbelievable",
  "🥱": "sleepyhead",
  "🤑": "richy-rich",
  "👻": "ghost",
  "👊🏻": "fist boomb",
  "🧠": "brain",
  "🥷🏻": "ninja",
  "🧜🏻‍♀️": "mermaid"
};

export default function App() {
  let [emoji, setEmoji] = useState("");
  let [meaning, setMeaning] = useState("translation will appear here");

  const emojis = Object.keys(emojiDictionary);

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise");
    }
  }
  function emojiHandler(inputEmoji) {
    setEmoji(inputEmoji);
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>
        I am <span style={{ color: "blue" }}>Emoji man</span>{" "}
      </h1>

      <p>Find your emoji here</p>

      <input
        style={{ padding: "1rem", width: "80%" }}
        onChange={changeHandler}
      />
      <div style={{ padding: "15px" }}>
        <h2>{emoji}</h2>
        <h3>{meaning}</h3>
      </div>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiHandler(emoji)}
          style={{ fontSize: "2rem", padding: ".4rem" }}
          value={emoji}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}

      <footer style={{ marginTop: "300px" }}>Made By Harshit Paliwal</footer>
    </div>
  );
}
