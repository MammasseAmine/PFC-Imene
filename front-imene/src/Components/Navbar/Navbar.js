import Profile from "../Profile/Profile";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css"
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();


  return (
    <nav>
<Profile />
<Searchbar />
{
  location.pathname === "/" 
  ?
  <select name="cars" id="cars">
    <option value="volvo">Choisir Un Escale</option>
    <option value="saab">Escale 001</option>
    <option value="opel">Escale 002</option>
    <option value="audi">Escale 003</option>
  </select>
  :
  location.pathname === "/etablireBordereaudeReserve" 
  ?
  <div className="bordereau">
    <h3>BORDEREAU DES RESERVES</h3>
<p> <span>PRISES</span> | <span>A L'EMBARQUEMENT (1)  AU DEBARQUMENT (1)</span> | <span>DU NAVIRE</span></p>  
  </div>

  :
  <div className="bordereau">
    <h3>Calcul Ecrat</h3> 
  </div>
}

    </nav>
  )
}

export default Navbar