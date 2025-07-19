import React from "react";
import { useState, useEffect } from "react";

const messages = ["Web Developer", "Programmer", "Ex-Toastmaster"];
const typingSpeed = 100; // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const delayBetween = 1000; // Delay

const TextWriting = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // msg se text lega
    const currentText = messages[index % messages.length];
    let timeout;

    if (!isDeleting) {
      // Typing effect

      // dekhega  tb tk chalega jb tk text ka length n ajaye
      if (text.length < currentText.length) {
        timeout = setTimeout(() => {
          // "" , means 0 => then new latter
          // now word =1,  but index 1 me new word milege
          // then word = 2 ,  but index 2 me new word hoga
          // is liye jb jb word aayega tb tb  size padhte jayega
          setText((prev) => prev + currentText[prev.length]);
        }, typingSpeed); // delay
      } else {
        // call back           , delaye
        timeout = setTimeout(() => setIsDeleting(true), delayBetween);
      }
    } else {
      // Deleting effect
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);
  return (
    <>
      <div>
        <div className="  border-r-2 font-bold  inline-block">{text}</div>
      </div>
    </>
  );
};

export default TextWriting;
