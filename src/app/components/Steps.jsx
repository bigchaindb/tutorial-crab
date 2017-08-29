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
                </div>
            </header>
        )
    }
}

export default Steps
