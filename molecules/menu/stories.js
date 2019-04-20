import React from "react"
import { storiesOf } from "@storybook/react"

import MenuItem from "_atoms/menu-item"

import Menu from "."

storiesOf("Molecules/Menu", module).add("default", () => (
  <Menu>
    <MenuItem iconType="home">Home</MenuItem>
    <MenuItem iconType="face">Profile</MenuItem>
    <MenuItem iconType="info">About</MenuItem>
  </Menu>
))
