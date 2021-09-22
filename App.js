import "./styles.css";

import React, { useState } from "react";

var emojiDictionary = {
  "🥡": "Chinese",
  "🧆": "Mid-eastern/North African",
  "🍛": "Asian",
  "🍜": "Japanese",
  "🍩": "American",
  "🍘": "Japanese",
  "🍔": "German/American"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [emojiOrigin, setEmojiOrigin] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var origin = emojiDictionary[userInput];
    if (origin === undefined) {
      origin = "We currently don't know the origin of this delicacy";
    }
    setEmojiOrigin(origin);
  }

  function emojiClickHandler(emoji) {
    var origin = emojiDictionary[emoji];
    setEmojiOrigin(origin);
  }

  return (
    <div className="App">
      <div className="page-heading">
        <h1>Food origin app</h1>
      </div>
      <input
        className="text-box"
        onChange={emojiInputHandler}
        placeholder="please enter a food emoji"
      ></input>
      <h2>{emojiOrigin}</h2>
      {emojiList.map((emoji) => {
        return (
          <span
            id="emoji-selector"
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
