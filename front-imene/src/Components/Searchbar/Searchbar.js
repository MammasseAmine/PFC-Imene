import {AiOutlineSearch} from "react-icons/ai"
import "./Searchbar.css"

const Searchbar = () => {
  return (

      <div className="wrap">
   <div className="search">
      <input type="text" class="searchTerm"  placeholder="?" />
      <button type="submit" className="searchButton">
        <AiOutlineSearch />
     </button>
   </div>
</div>

  )
}

export default Searchbar;