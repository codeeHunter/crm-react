import React from "react";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./scss/App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <Navigation />
      </div>
    </>
  );
}

export default App;
