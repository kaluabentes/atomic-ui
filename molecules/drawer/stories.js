import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Drawer from "."

storiesOf("Molecules/Drawer", module).add("default", () => (
  <Drawer isOpen onClose={action("Close")}>
    Drawer
  </Drawer>
))
