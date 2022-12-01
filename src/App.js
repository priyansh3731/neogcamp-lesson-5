import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "😊": "smile",
    "❤️": "love",
    "😴": "sleeping",
    "🥶": "cold",
    "🤮": "vomiting"
  };

  var emojiWeKnow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>iinside outtt</h1>

      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>

      <h2>emoji we know </h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
