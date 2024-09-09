import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Post
        title={"Titulo de prueba"}
        link={"https://www.hipocampo.org/FototestOnline/Fototest.jpg"}
        description={"Descripcion del post"}
        fotodescription={"Foto de prueba"}
      />
      <Footer />
    </>
  );
}

export default App;
