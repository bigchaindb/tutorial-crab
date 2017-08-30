import React from 'react'

class Output extends React.Component {
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
                </aside>
            </header>
        )
    }
}

export default Output
