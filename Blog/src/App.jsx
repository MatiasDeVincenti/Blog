import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import { supabase } from "./live/helper/supaBaseClient";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await SupabaseAuthClient.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };
    getSession();
  }, []);

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <Header />
      <button onClick={handleLogin}>Iniciar sesión con GitHub</button>
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
