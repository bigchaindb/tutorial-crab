import React from 'react'
import { NavLink } from 'react-router-dom'

import { GithubLogo } from './Icons'
import Logo from '../img/BDB@2ds.png'

class Steps extends React.Component {
    render() {
        return (
            <header>
                <div className="menu menu--main">
                    <NavLink className="menu__links" to="/">
                        <img src={Logo} height="50"/>
                    </NavLink>
                    <div>
                        <NavLink className={'menu__links ' + (menuChecked(0) ? 'checked' : '')}
                            activeClassName="active" exact to="/">
                            <span className="number">{(menuChecked(0) ? '✓' : '0')}</span> <span className="label">Start</span>
                        </NavLink>
                        <NavLink className={'menu__links ' + (menuChecked(1) ? 'checked' : '')}
                            activeClassName="active" to="/create">
                            <span className="number">{(menuChecked(1) ? '✓' : '1')}</span> <span className="label">Create</span>
                        </NavLink>
                        <NavLink className={'menu__links ' + (menuChecked(2) ? 'checked' : '')}
                            activeClassName="active" to="/retrieve">
                            <span className="number">{(menuChecked(2) ? '✓' : '2')}</span> <span className="label">Retrieve</span>
                        </NavLink>
                        <NavLink className={'menu__links ' + (menuChecked(3) ? 'checked' : '')}
                            activeClassName="active" to="/append">
                            <span className="number">{(menuChecked(3) ? '✓' : '3')}</span> <span className="label">Append</span>
                        </NavLink>
                        <NavLink className={'menu__links ' + (menuChecked(4) ? 'checked' : '')}
                            activeClassName="active" to="/burn">
                            <span className="number">{(menuChecked(4) ? '✓' : '4')}</span> <span className="label">Burn</span>
                        </NavLink>
                    </div>
                    <a href="https://github.com/bigchaindb/tutorial-crab/" target="_blank">
                        <span className="logo-md"><GithubLogo/></span>
                    </a>
                </div>
            </header>
        )
    }
}

function menuChecked(position) {
    switch (window.location.pathname) {
        case '/crab/':
            if (position >= 0) return false
            return true
        case '/crab/create':
            if (position >= 1) return false
            return true
        case '/crab/retrieve':
            if (position >= 2) return false
            return true
        case '/crab/append':
            if (position >= 3) return false
            return true
        case '/crab/burn':
            if (position >= 4) return false
            return true
        default:
            return true
    }
}

export default Steps
