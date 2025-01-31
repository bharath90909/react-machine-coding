import React, { useEffect, useState } from "react";
import classes from "./pagination.module.css";
const items = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  label: `Item ${i + 1}`,
}));
function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 4;

  const fetchPage = () => {
    return new Promise((res) => {
      setTimeout(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const newItems = [...items].slice(indexOfFirstItem, indexOfLastItem);
        res(newItems);
      }, 1000);
    });
  };

  const fetchPages = async () => {
    setIsLoading(true);
    const data = await fetchPage();
    setCurrentItems(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPages();
  }, [currentPage]);
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Pagination</h1>
      <div className={classes.pages}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {currentItems.length > 0 &&
              currentItems.map((item) => <p>{item.label}</p>)}
          </div>
        )}
      </div>

      <div className={classes.buttons}>
        {Array.from({ length: 5 }, (_, i) => (
          <button onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
