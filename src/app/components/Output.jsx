import React from 'react'
import classnames from 'classnames'

import Crab from '../img/tumblr_m9wlwqH8Xf1rfjowdo1_500.gif'
import Flame from '../img/flame-gif-6.gif'

class Output extends React.Component {
    getCrabReward() {
        if (this.props.append) {
            return (
                <div className={
                    classnames(
                        'img-wrapper',
                        { 'hidden': !this.props.output }
                    )}>
                    <img src={Crab} width='70%'/>
                    <img src={Crab} width='30%'/>
                </div>
            )
        } else if (this.props.burn) {
            return (
                <div className={
                    classnames(
                        'img-wrapper',
                        { 'hidden': !this.props.output }
                    )}>
                    <img src={Flame} width='30%'/>
                    <img src={Crab} width='40%'/>
                    <img src={Flame} width='30%'/>
                </div>
            )
        }
        return (
            <div className={
                classnames(
                    'img-wrapper',
                    { 'hidden': !this.props.output }
                )}>
                <img src={Crab} width='70%'/>
            </div>
        )
    }

    render() {
        return (
            <header>
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
                    { this.getCrabReward() }
                    { !!this.props.output && this.props.children }
                </aside>
            </header>
        )
    }
}

export default Output
