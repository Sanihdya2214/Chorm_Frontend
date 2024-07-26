import React, { useState, useEffect } from "react";

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/Quotes/quote"); // Update with your actual backend URL
        const data = await response.json();
        if (data && data.length > 0) {
          setQuotes(data);
          setQuote(data[0].text);
          setAuthor(data[0].author);
        } else {
          setError("No quotes available.");
        }
      } catch (error) {
        setError("Failed to fetch quotes.");
      } finally {
        setLoading(false);
      }
    };

    getQuotes();
  }, []);

  useEffect(() => {
    let typingTimeout;
    let deletingTimeout;
    if (typing) {
      if (displayedText.length < quote.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(quote.slice(0, displayedText.length + 1));
        }, 100); // Adjust typing speed here
      } else {
        typingTimeout = setTimeout(() => setTyping(false), 3000); // Pause before deleting
      }
    } else {
      if (displayedText.length > 0) {
        deletingTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Adjust deleting speed here
      } else {
        setTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setQuote(quotes[(currentIndex + 1) % quotes.length].text);
        setAuthor(quotes[(currentIndex + 1) % quotes.length].author);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [displayedText, typing, quote, quotes, currentIndex]);

  return (
    <div className="text-center mt-8 max-w-xl mx-auto transition-transform transform hover:scale-105 duration-300">
      {loading ? (
        <p className="text-center text-xl">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-xl">{error}</p>
      ) : (
        <>
          <h1
            className="text-3xl text-orange-300 font-bold italic mb-4 break-words"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            &ldquo;{displayedText}&rdquo;
          </h1>
          {!typing && displayedText.length === 0 && (
            <h2
              className="text-2xl font-medium"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              — {author}
            </h2>
          )}
        </>
      )}
    </div>
  );
};

export default QuoteOfTheDay;
