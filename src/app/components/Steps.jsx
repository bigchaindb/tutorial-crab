import React from 'react'
import { NavLink } from 'react-router-dom'

import { Logo, GithubLogo } from './Icons'

class Steps extends React.Component {
    render() {
        return (
            <header>
                <div className="menu menu--main">
                    <NavLink className="menu__links" to="/">
                        <Logo/>
                    </NavLink>
                    <div className="row row--wide">
                        <NavLink className="menu__links" activeClassName="active" to="/install">
                            <span className="number">0</span> <span className="label">Install</span>
                        </NavLink>
                        <NavLink className="menu__links" activeClassName="active" to="/create">
                            <span className="number">1</span> <span className="label">Create</span>
                        </NavLink>
                        <NavLink className="menu__links" activeClassName="active" to="/retrieve">
                            <span className="number">2</span> <span className="label">Retrieve</span>
                        </NavLink>
                        <NavLink className="menu__links" activeClassName="active" to="/append">
                            <span className="number">3</span> <span className="label">Append</span>
                        </NavLink>
                        <NavLink className="menu__links" activeClassName="active" to="/burn">
                            <span className="number">4</span> <span className="label">Burn</span>
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

export default Steps
