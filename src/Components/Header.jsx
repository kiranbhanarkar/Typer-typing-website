import React from 'react'
import AccountIcon from './AccountIcon'

function Header() {
  return (
    <div className="header">
        <div className="logo">
            Logo
        </div>
        <div className="user-profile">
            <AccountIcon />
        </div>

    </div>
  )
}

export default Header