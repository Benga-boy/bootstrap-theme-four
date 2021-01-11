import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'


const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')

  const toggle = () => setIsOpen(!isOpen)

  const activeLink = () => setActive('active')

  return (
    <Navbar expand="sm" color="dark" light className="p-0">
      <Container>
        <NavbarBrand>
          <Link to="/">Blogen</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="px-2">
                <Link className={active} onClick={activeLink} to="/dashboard">Dashboard</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="px-2">
                <Link to="/posts">Posts</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="px-2">
                <Link to="/categories">Categories</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="px-2">
                <Link to="/users">Users</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto p-0">
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="mr-3">
                <i className="fas fa-user"> </i>  Welcome Benga
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem> <Link to="/profile"><i className="fas fa-user-circle"></i> Profile</Link></DropdownItem>
                <DropdownItem> <i className="fas fa-cog"></i> Settings</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink> <i className="fas fa-user-times"></i> Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTop
