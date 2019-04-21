import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import "_styles/base.css"

const Base = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
        rel="stylesheet"
      />
    </Helmet>
    {children}
  </>
)

Base.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Base
