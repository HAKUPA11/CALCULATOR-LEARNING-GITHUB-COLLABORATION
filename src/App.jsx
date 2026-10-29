import React from "react";

const App = () => {
  let data = ["Manas","John","Kirk","Tim"];
  return (<div>
    {data.map((val,index)=>(
    <p key={index}>{val}</p>
  ))}
  </div>);
};

export default App;
