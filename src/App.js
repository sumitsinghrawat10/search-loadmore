import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [showMore, setShowMore] = useState(3);

  const a = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ];

  const data = a.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  const changeD = (e) => {
    setSearch(e.target.value);
  };
  const loadMore = () => {
    setShowMore((v) => v + 3);
  };

  return (
    <div>
      <center>
        <h1>Search Filter</h1>
        <input onChange={changeD} />
        {data.slice(0, showMore).map((d) => (
          <h1> {d} </h1>
        ))}
        {<button onClick={loadMore}> Load More </button>}
      </center>
    </div>
  );
};

export default App;
