import React, { Component } from 'react'
import { ModelDetails } from './ModelDetails'
import { connect } from 'react-redux'

class Models extends Component {
    render() {
        return (
            <div>
                {
                    this.props.models.map(model => {
                        return <ModelDetails model={model} key={model.name}/>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        models: state.models
    }
}

export default connect(mapStateToProps)(Models)
