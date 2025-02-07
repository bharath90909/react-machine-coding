import React, { useEffect, useState } from "react";
import "./infinitescroll.css";
function InfiniteScroll() {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchApi();
    console.log(data.data);
    setFetchedData((prev) => [...prev, ...data.data]);
    setLoading(false);
  };
  const fetchApi = () => {
    console.log("page", page);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const results = Array.from({ length: 100 }, (_, i) => {
          return {
            label: `Item ${i + 1 + (page - 1) * 100}`,
          };
        });
        // console.log(results);
        return resolve({ data: results });
      }, 3000);
    });
  };
  //for initial page load

  //for handling scroll
  useEffect(() => {
    // console.log("hai from scroll effect");
    if (page < 5) {
      const handleScroll = () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        if (scrollTop + clientHeight >= scrollHeight && !loading) {
          console.log("yes at bottom");
          setPage((prev) => prev + 1);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [loading, page]);

  //after some scroll will try to render new page
  useEffect(() => {
    if (page < 5) {
      fetchData();
    }
  }, [page]);
  return (
    <div className="w-[500px] flex flex-col mx-auto bg-slate-400 items-center text-xl">
      <h1>Infinite Scroll</h1>
      <div className="w-full text-center">
        {fetchedData &&
          fetchedData.length > 0 &&
          fetchedData.map((data, i) => {
            return (
              <p className="mt-4 bg-yellow-600 w-full slide-in" key={i}>
                {data.label}
              </p>
            );
          })}
      </div>
      {loading && <h1>Loading....</h1>}
    </div>
  );
}

export default InfiniteScroll;
