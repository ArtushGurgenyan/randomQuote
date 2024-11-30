import React from "react";
import { useEffect, useState } from "react";
import "./quote.style.css";

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, [reload]);

  const handleClick = () => {
    setReload(!reload);
  };

  return (
    <>
      {quote.map((elem) => (
        <div key={elem._id} className="container">
          <p>{elem.content}</p>
          <cite>{elem.author}</cite>
        </div>
      ))}
      <button onClick={handleClick}>Reload quotes</button>
    </>
  );
};

export default Quote;
