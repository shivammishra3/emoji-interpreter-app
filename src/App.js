import React, { useState } from "react";
import './style.css';

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😑": "annoyance",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤣": "Rolling on the Floor Laughing",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😋": "Face Savoring Food",
  "🤑": "Money-Mouth Face",
  "🤫": "Shushing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🤐": "Zipper-Mouth Face",
  "😏": "Smirking Face",
  "🥺": "Pleading Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😎": "Smiling Face with Sunglasses",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😅": "Grinning Face with Sweat",
  "🤪": "Zany Face",
  "🤗": "Hugging Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥳": "Partying Face",
  "😰": "Anxious Face with Sweat",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = <h3>"Sorry, this is not in out database"</h3>;
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
