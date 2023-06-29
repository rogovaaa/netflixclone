import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const onChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const onClick = (e: any) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchText}`);
      setSearchText("");
    }
  };
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  return (
    <>
      <div className={`search ${showSearch ? "show-search" : ""}`}>
        <button
          onFocus={() => setShowSearch(true)}
          onBlur={() => {
            if (!inputHover) {
              setShowSearch(false);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            id="search"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M14.192 15.606a7 7 0 1 1 1.414-1.414l5.172 5.172a1 1 0 0 1-1.414 1.414l-5.172-5.172ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <input
          type="text"
          placeholder="Titles"
          onMouseEnter={() => setInputHover(true)}
          onMouseLeave={() => setInputHover(false)}
          onBlur={() => {
            setShowSearch(false);
            setInputHover(false);
          }}
          value={searchText}
          onChange={onChange}
          onKeyDown={onClick}
        />
      </div>
    </>
  );
};

export default Search;
