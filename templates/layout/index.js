import React, { useState } from "react"
import PropTypes from "prop-types"

import Base from "_templates/base"
import AppBar from "_molecules/app-bar"
import Copyright from "_atoms/copyright"
import Title from "_atoms/title"
import IconButton from "_molecules/icon-button"
import Drawer from "_molecules/drawer"
import Menu from "_molecules/menu"
import MenuItem from "_atoms/menu-item"

const Layout = ({ children, menuItems, onMenuItemClick }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const handleMenuItemClick = path => {
    setDrawerOpen(false)
    onMenuItemClick(path)
  }

  return (
    <Base>
      <AppBar>
        <IconButton
          onClick={openDrawer}
          type={IconButton.types.primary}
          iconType="menu"
        />
        <Title>News</Title>
        <IconButton type={IconButton.types.primary} iconType="face" />
      </AppBar>
      <main>{children}</main>
      <footer>
        <Copyright>FoodApp</Copyright>
      </footer>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <Menu>
          {menuItems.map(item => (
            <MenuItem
              onClick={() => handleMenuItemClick(item.path)}
              iconType={item.icon}
            >
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </Drawer>
    </Base>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  onMenuItemClick: PropTypes.func,
}

Layout.defaultProps = {
  menuItems: [],
  onMenuItemClick: () => {},
}

export default Layout
