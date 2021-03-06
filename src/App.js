import React, { useState } from "react";
import './style.css';

var emojiDictionary = {
  "π": "smiling",
  "π³": "disbelief",
  "π": "sad",
  "π΄": "Sleeping Face",
  "π·": "Face with Medical Mask",
  "π€£": "Rolling on the Floor Laughing",
  "π": "Winking Face",
  "π": "Smiling Face with Heart-Eyes",
  "π€©": "Star-Struck",
  "π": "Face Blowing a Kiss",
  "π₯΅": "Hot Face",
  "π₯Ά": "Cold Face",
  "π": "Smirking Face",
  "π₯Ί": "Pleading Face",
  "π": "Unamused Face",
  "π": "Smiling Face with Sunglasses",
  "π­": "Loudly Crying Face",
  "π±": "Face Screaming in Fear",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = <h3>"Sorry, this is not in out databaseβ"</h3>;
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
      <h3 > Emojis We Know Currently π</h3>
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
