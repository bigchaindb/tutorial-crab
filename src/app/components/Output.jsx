import React from 'react'

class Output extends React.Component {
    render() {
        return (
          <header>
              <aside className="code-example">
                  <pre>
                      <code>
                          {this.props.output}
                      </code>
                  </pre>
              </aside>
          </header>
      );
    }
}

export default Output
