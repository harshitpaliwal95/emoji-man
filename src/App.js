import React, { useState } from "react";
import "./styles.css";

// javascript objects
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
  "🧜🏻‍♀️": "mermaid",
  "🥳": "cheers",
  "☑": "checked"
};

export default function App() {
  // first assign
  let [emoji, setEmoji] = useState("");
  let [meaning, setMeaning] = useState("translation will appear here");

  const emojis = Object.keys(emojiDictionary);

  // function for emoji scan
  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise");
    }
  }

  // function for emoji list
  function emojiHandler(inputEmoji) {
    setEmoji(inputEmoji);
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    // main section
    <div className="App">
      <h1>
        I am <span style={{ color: "blue" }}>Emoji man</span>{" "}
      </h1>

      <p>Find your emoji here</p>

      <input
        style={{ padding: "1rem", width: "80%" }}
        onChange={changeHandler}
        placeholder="drop your emoji"
      />
      <div style={{ padding: "15px" }}>
        <h2>{emoji}</h2>
        <h3>{meaning}</h3>
      </div>

      {/* showing all emoji list */}
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

      {/* footer */}

      <footer style={{ marginTop: "200px", padding: "12px" }}>
        Made By Harshit Paliwal
      </footer>

      {/* links for stay connected */}

      <div id="links">
        <a href="https://twitter.com/harshit__hp" target="_blank">
          <i class="fab fa-twitter fa-2x"></i>
        </a>

        <a href="https://github.com/harshitpaliwal95" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/harshit-paliwal-8302951b0/"
          target="_blank"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
