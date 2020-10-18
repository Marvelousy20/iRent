import PropTypes from "prop-types"
import React from "react"
import Sidedrawer from '../components/sub-components/sidedrawer'

const Header = ({ siteTitle }) => {
  
  const [state, setState] = React.useState({
    sideBarOpen: false
  })

  const onBarOpen = () => {
    setState({
      sideBarOpen: !state.sideBarOpen,
    })
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div>
        <Sidedrawer 
          sideBarOpen = {state.sideBarOpen} 
          onBarOpen = {onBarOpen} 
        />
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
