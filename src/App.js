import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useContext, MainContext } from "../src/context";

function App() {
  const [state, dispatch] = useContext(MainContext);

  const { theme, message, linkedin } = state;

  console.log("Context", state);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{message}</h3>

        <div className="buttonContainer">
          <button
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className="button">
            Toggle Theme
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "TOGGLE_MESSAGE",
                payload: "Hi everyone! I'm Furkan TÜRKYILMAZ",
              })
            }
            className="button">
            Change Message
          </button>
        </div>
        <a
          className="App-link"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
