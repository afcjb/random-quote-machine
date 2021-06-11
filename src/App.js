import { useState, useEffect } from "react";



function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    randomQuote();
  }, []);

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
  const URL = "https://api.quotable.io/random";
  const tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes ${quote.content} \n${quote.author}`;

  const randomQuote = () =>
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      });

  return (
    <div id="wrapper" className="container">
      <div className="row py-5">
        <div className="col-md-8 offset-md-2">
          <div id="quote-box">
            <div className="card">
              <div className="card-header text-center">
                Best Quotes Ever, no joke
              </div>
              <div className="card-body">
                <h3 className="card-title text-secondary">
                  <div id="text">{quote.content}</div>
                </h3>
                <h5 className="text-info mt-2" style={{ float: "right" }}>
                  <div id="author">{quote.author}</div>
                </h5>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ margin: "0 15px 20px 15px" }}
              >
                <button
                  id="new-quote"
                  className="btn"
                  onClick={randomQuote}
                  style={{ backgroundColor: `#${randomColor}`, color: "#fff" }}
                >
                  New Quote
                </button>
                <a
                  href={tweetLink}
                  id="tweet-quote"
                  className="btn btn-primary fa fa-twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  {} Tweet Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
