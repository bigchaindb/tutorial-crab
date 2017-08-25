import React from 'react'
import { NavLink } from 'react-router-dom'

import { Logo } from './Icons'

class Steps extends React.Component {
    render() {
        return (
            <header>
                <div className="menu menu--main">
                    <Logo/>
                    <div className="row row--wide">
                        <NavLink className="menu__links" activeClassName="active" to="/create">
                            <span className="number">1</span> Create
                        </NavLink>
                        <NavLink className="menu__links" activeClassName="active" to="/retrieve">
                            <span className="number">2</span> Retrieve
                        </NavLink>
                        <NavLink className="menu__links" activeClassName="active" to="/append">
                            <span className="number">3</span> Append
                        </NavLink>
                        <NavLink className="menu__links" activeClassName="active" to="/burn">
                            <span className="number">4</span> Burn
                        </NavLink>
                    </div>
                </div>
            </header>
        )
    }
}

export default Steps
