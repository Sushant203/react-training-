import React, { useState } from "react";

function Index() {
  const [Data, setData] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setData((previous) => previous + 1);
        }}
      >
        increase
      </button>
      <div>{Data}</div>
      <button
        onClick={() => {
          setData((previous) => previous - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
}

export default Index;
