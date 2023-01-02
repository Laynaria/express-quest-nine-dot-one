import axios from "axios";
import { useRef } from "react";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const inputRef = useRef(null);

  function hSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    axios.post("http://localhost:5000/api/avatar", formData);
  }

  return (
    <div className="App">
      <form encType="multipart/form-data" onSubmit={hSubmit}>
        <input type="file" name="avatar" ref={inputRef} />
        <button type="submit">Envoyer</button>
      </form>
      <Home />
      <p>coucou</p>
    </div>
  );
}

export default App;
