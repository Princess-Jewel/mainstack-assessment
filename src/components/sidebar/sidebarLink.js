import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({link}) => {
  return (
    <NavLink
      to={link.path}
      className="sidebarLink"
    >
      <div className="sidebar_icon">
        <img src={link.icon} alt={link.label} />
      </div>
      {link.label}
    </NavLink>
  )
}

export default SidebarLink