import React from "react"
import { storiesOf } from "@storybook/react"

import Drawer from "."

storiesOf("Molecules/Drawer", module).add("default", () => (
  <Drawer isOpen>Drawer</Drawer>
))
