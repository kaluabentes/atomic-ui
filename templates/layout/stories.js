import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Layout from "."

const menuItems = [
  {
    text: "Home",
    icon: "home",
    path: "/",
  },
  {
    text: "About",
    icon: "info",
    path: "/about",
  },
  {
    text: "Profile",
    icon: "face",
    path: "/profile",
  },
]

storiesOf("Templates/Layout", module).add("default", () => (
  <Layout menuItems={menuItems} onMenuItemClick={action("Clicked")}>
    Layout
  </Layout>
))
