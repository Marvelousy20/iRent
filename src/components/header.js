import PropTypes from "prop-types"
import React from "react"
import Sidedrawer from '../components/sub-components/sidedrawer'
import iRentLogo from '../images/irentLogo.svg'

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
    <header>
     <div className = "text-center">
        <img src = {iRentLogo} alt = "irentLogo" />
      </div> 
      <Sidedrawer 
        sideBarOpen = {state.sideBarOpen} 
        onBarOpen = {onBarOpen} 
      />
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
