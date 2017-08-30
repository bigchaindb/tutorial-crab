import React from 'react'


class TutorialStep extends React.Component {
    constructor(props) {
        super(props)
        let localState = {
            crab: null,
            keypair: null,
        }
        if (!props.location.state) {
            const crabId = localStorage.getItem('crabid')
            const keypair = JSON.parse(localStorage.getItem('keypair'))
            if (crabId && keypair) {
                localState.crab = { id: crabId }
                localState.keypair = keypair
            }
        } else {
            localState = this.props.location.state
        }
        this.state = {
            ...localState,
            output: null
        }
        if (!this.state.crab || !this.state.keypair) {
            this.props.history.push('/create')
        }
    }
}

export default TutorialStep
