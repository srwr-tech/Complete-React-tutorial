import React from "react";
import Student from "./Student";
function App() {
  function handlertChild(name) {
    alert(name);
  }
  return (
    <>
      <Student newData={handlertChild} />
    </>
  );
}
export default App;
