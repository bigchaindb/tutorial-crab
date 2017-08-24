import React from 'react'

class Output extends React.Component {
    render() {
        return (
          <header>
              <aside className="code-example">
                  <div className="tab-content">
                      <div className="tab-pane active" id="python">
                          <div className="highlight">
                              <pre>
                                  <code className="language-python">
                                      {this.props.output}
                                  </code>
                              </pre>
                          </div>
                      </div>
                  </div>
              </aside>
          </header>
      );
    }
}

export default Output
