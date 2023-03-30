import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks/hooks";
import { fetchUsers } from "./app/store/reducers/ActionCreators";
import PostContainer from "./components/Postcontainer";

function App() {
  return (
    <div className="App">
      <div className="content">
        <PostContainer />
      </div>
    </div>
  );
}

export default App;
