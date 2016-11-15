import React, {Component, PropTypes} from 'react'
import CardTitle from 'material-ui/Card/CardTitle'
import {Link, IndexLink} from 'react-router'

const CollAddSeedHeader = ({ col }, context) => {
  let { primary1Color } = context.muiTheme.baseTheme.palette
  let linkStyle = {
    color: primary1Color,
    textDecoration: 'none'
  }
  let title = <span><IndexLink style={linkStyle} to='/'>Collections</IndexLink> > <Link style={linkStyle}
    to={`Collections/${col}`}>{col}</Link> > Add Seed</span>
  return (
    <CardTitle style={{marginLeft: 10}} title={title}/>
  )
}
CollAddSeedHeader.propTypes = {
  col: PropTypes.string.isRequired
}
CollAddSeedHeader.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default CollAddSeedHeader

