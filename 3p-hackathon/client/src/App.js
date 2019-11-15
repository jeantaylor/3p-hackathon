import React from "react";

import SearchHeader from "../src/Components/searchHeader";

import Tronald from "./components/TheTronald"; 
import MainContent from "./components/mainContent";



function App() {
  return (
    <div className="App">

      <SearchHeader />

      <MainContent />
      <Tronald />

    </div>
  );
}

export default App;
