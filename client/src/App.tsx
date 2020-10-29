import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://${process.env.REACT_APP_API_BASE_URL}/api/v1/hello`)
      .then((res) => res.json())
      .then(
        ({ message }) => {
          setIsLoading(false);
          setMessage(message);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isLoading && (
          <p>{error === null ? message : (error as any).message}</p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
