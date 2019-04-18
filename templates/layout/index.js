import React from 'react'
import PropTypes from 'prop-types'

import Base from '_templates/base'
import AppBar from '_molecules/app-bar'
import Copyright from '_atoms/copyright'
import Title from '_atoms/title'
import IconButton from '_molecules/icon-button'

const Layout = ({ children }) => (
  <Base>
    <AppBar>
      <IconButton type={IconButton.types.primary} iconType="menu" />
      <Title>News</Title>
      <IconButton type={IconButton.types.primary} iconType="face" />
    </AppBar>
    <main>{children}</main>
    <footer>
      <Copyright>FoodApp</Copyright>
    </footer>
  </Base>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
