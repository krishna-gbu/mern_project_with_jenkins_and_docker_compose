import { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  let postFun = async () => {
    try {
      const posts = await axios.get("/api");
      setPosts(posts.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postFun();
  }, []);

  return (
    <div className="App">
     <h1>react fetch data from api</h1>
      <p>{JSON.stringify(posts)}</p>
    </div>
  );
}

export default App;
