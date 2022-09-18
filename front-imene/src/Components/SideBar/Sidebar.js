import { NavLink } from "react-router-dom"
import "./Sidebar.css"
import { SidebarData } from "./SidebarData"

const Sidebar = () => {
  return (
    <div id="sidebar">

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