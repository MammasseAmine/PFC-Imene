import Profile from "../Profile/Profile";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
<Profile />
<Searchbar />
<select name="cars" id="cars">
    <option value="volvo">Choisir Un Escale</option>
    <option value="saab">Escale 001</option>
    <option value="opel">Escale 002</option>
    <option value="audi">Escale 003</option>
  </select>
    </nav>
  )
}

export default Navbar