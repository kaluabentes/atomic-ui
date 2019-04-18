import React from "react"
import { storiesOf } from "@storybook/react"

import Copyright from "."

storiesOf("Atoms/Copyright", module).add("default", () => (
  <Copyright>FoodApp</Copyright>
))
