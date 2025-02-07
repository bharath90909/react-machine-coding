import React, { useState } from "react";
const data = [
  { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
  { id: 2, title: "Interstellar", genre: "Sci-Fi", year: 2014 },
  { id: 3, title: "The Dark Knight", genre: "Action", year: 2008 },
  { id: 4, title: "The Matrix", genre: "Sci-Fi", year: 1999 },
  { id: 5, title: "Forrest Gump", genre: "Drama", year: 1994 },
  { id: 6, title: "Titanic", genre: "Romance", year: 1997 },
  { id: 7, title: "Avatar", genre: "Sci-Fi", year: 2009 },
  { id: 8, title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { id: 9, title: "Gladiator", genre: "Action", year: 2000 },
  { id: 10, title: "The Godfather", genre: "Crime", year: 1972 },
];

function List({ items, onClick }) {
  return (
    <div>
      {items &&
        items.map((item) => (
          <li onClick={() => onClick(item.title)}>{item.title}</li>
        ))}
    </div>
  );
}

function AutoSearch() {
  const [input, setInput] = useState("");
  const [listItems, setListItems] = useState([]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
    const suggestions = data.filter((item) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    console.log(suggestions);
    setListItems(suggestions);
  };

  const handleSubmit = () => {
    console.log("Data submitted");
  };
  return (
    <div>
      <input type="text" value={input} onChange={(e) => handleInputChange(e)} />
      <button onClick={handleSubmit}>Submit</button>
      <List items={listItems} onClick={setInput} />
    </div>
  );
}

export default AutoSearch;
