
import { SearchIcon } from "@/app/icons/icons";
import { useState } from "react";


const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
 

  
  const handleSearch = () => {
    if (searchText.trim()) {
      console.log("Searching for:", searchText);

    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <div
      className={`flex items-center space-x-2 p-2`}
    
    >
      <SearchIcon
      
      />
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search here..."
        className="outline-none text-sm text-gray-700 flex-grow"
     
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default SearchBar;
