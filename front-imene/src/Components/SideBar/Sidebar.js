import { NavLink } from "react-router-dom"
import "./Sidebar.css"
import { SidebarData } from "./SidebarData"
import Logo from "../../images/Logo.png"

const Sidebar = () => {
  return (
    <div id="sidebar">
<img src={Logo} alt="logo" />
      {
        SidebarData.map( (val,key)=>{
          return (
            <NavLink to={val.link} key={key}>
              <div className="icon">{val.icon}</div>
              <div  className="name" >{val.name}</div>
              </NavLink>
          )
        } )
      }

    </div>
  )
}

export default Sidebar