import React, { useState } from "react";
import './style.css';

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winking Face",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "😏": "Smirking Face",
  "🥺": "Pleading Face",
  "😒": "Unamused Face",
  "😎": "Smiling Face with Sunglasses",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = <h3>"Sorry, this is not in out database❌"</h3>;
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} placeholder={"Search your emoji here"} />

      <h2> {meaning} </h2>
      <h3 > Emojis We Know Currently 👇</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer"}}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
