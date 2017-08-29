import React from 'react'

class Output extends React.Component {
    render() {
        return (
            <header>
                <aside className="code-example code-output">
                    <pre>
                        <code>
                            {
                                this.props.output || '> Bleep Bop... Waiting for input'
                            }
                        </code>
                    </pre>
                </aside>
            </header>
        )
    }
}

export default Output
