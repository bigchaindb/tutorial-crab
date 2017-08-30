import React from 'react'
import classnames from 'classnames'

import Crab from '../img/tumblr_m9wlwqH8Xf1rfjowdo1_500.gif'

class Output extends React.Component {
    render() {
        return (
            <header>
                <div className={
                    classnames(
                        'img-wrapper',
                        { 'hidden': !this.props.output }
                    )}>
                    <img src={Crab} width='70%'/>
                </div>
                <aside className="code-example code-output">
                    <pre className={(this.props.error ? 'error' : '')}>
                        <code>
                            {
                                this.props.output ||
                                this.props.error ||
                                '> Bleep Bop... Waiting for input'
                            }
                        </code>
                    </pre>
                </aside>
            </header>
        )
    }
}

export default Output
