
import React, { useState } from "react";

import Welcome from "./components/Welcome";
import Memories from "./components/Memories";
import BirthdayWish from "./components/BirthdayWish";
import FinalLetter from "./components/FinalLetter";

const App = () => {
  const [currentPage, setCurrentPage] = useState("welcome");

  return (
    <>
      {currentPage === "welcome" && (
        <Welcome onNext={() => setCurrentPage("memories")} />
      )}

      {currentPage === "memories" && (
        <Memories onNext={() => setCurrentPage("birthday")} />
      )}

      {currentPage === "birthday" && (
        <BirthdayWish onNext={() => setCurrentPage("letter")} />
      )}

      {currentPage === "letter" && (
        <FinalLetter />
      )}
    </>
  );
};

export default App;
