import React, { useState } from "react";
import Input from "./Input";
import FindProfile from "./FindProfile";
function GithubProfileFinder() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);

  function startSearch() {
    if (input.trim()) {
      setSearch(true);
      setInput("");
    }
  }
  return (
    <div className="w-[100vw] h-screen flex flex-row justify-center mt-4">
      <div>
        <div className="flex flex-row justify-between items-center mb-4">
          <Input input={input} setInput={setInput} setSearch={setSearch} />
          <button
            disabled={input.length > 0 ? false : true}
            onClick={startSearch}
            className="border p-1 ml-2 "
          >
            Search
          </button>
        </div>
        {search && <FindProfile userName={input} />}
      </div>
    </div>
  );
}

export default GithubProfileFinder;
