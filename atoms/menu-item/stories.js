import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import MenuItem from "."

storiesOf("Atoms/MenuItem", module)
  .add("default", () => <MenuItem onClick={action("Clicked")}>Option</MenuItem>)
  .add("with icon", () => (
    <MenuItem iconType="face" onClick={action("Clicked")}>
      Option
    </MenuItem>
  ))
