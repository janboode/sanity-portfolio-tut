import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const logoLinkStyle =
  "inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"

const navLinkStyle =
  "inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"

const navLinkActiveStyle = "text-white bg-red-700 pointer-events-none"

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            className={logoLinkStyle}
            activeClassName={navLinkActiveStyle}
            to="/"
            exact
          >
            Jan
          </NavLink>
          <NavLink
            className={navLinkStyle}
            activeClassName={navLinkActiveStyle}
            to="/post"
            exact
          >
            Blog Posts
          </NavLink>
          <NavLink
            className={navLinkStyle}
            activeClassName={navLinkActiveStyle}
            to="/project"
            exact
          >
            Projects
          </NavLink>
          <NavLink
            className={navLinkStyle}
            activeClassName={navLinkActiveStyle}
            to="/about"
            exact
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex justify-center items-center">
          <SocialIcon
            url="https://twitter.com/demonkleenr"
            target="_blank"
            fgColor="#fff"
            className="mr-4"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/janboode/"
            target="_blank"
            fgColor="#fff"
            className="mr-4"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://codepen.io/bryte_jab"
            target="_blank"
            fgColor="#fff"
            className="mr-4"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar
