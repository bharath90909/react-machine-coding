import React, { useEffect, useState } from "react";
import "./infinitescroll.css";
function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchNewPage = () => {
    return new Promise((res) => {
      setTimeout(() => {
        const resposne = Array.from(
          { length: 100 },
          (_, i) => `Item ${(page - 1) * 100 + (i + 1)}`
        );
        res(resposne);
      }, 2000);
    });
  };

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetchNewPage();
    setData((prev) => [...prev, ...data]);
    setIsLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (!isLoading && scrollTop + clientHeight >= scrollHeight - 100) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, page]);
  useEffect(() => {
    if (page <= 5) {
      fetchData();
    }
  }, [page]);
  return (
    <div className="infinite-container">
      <h1>Infinte Scroll</h1>
      {data && data.length > 0 && data.map((item) => <p>{item}</p>)}
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}

export default InfiniteScroll;
