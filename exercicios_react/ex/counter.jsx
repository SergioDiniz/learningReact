import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {dec, inc, stepChanged} from './counterActions'

const Counter = props => {
    return (
        <div>
            <h1>{props.counter.number}</h1>
            <input 
                type='number' 
                onChange={props.stepChanged} 
                value={props.counter.step}/>
            <button onClick={props.dec}>dec</button>
            <button onClick={props.inc}>inc</button>
        </div>
    )
}

const mapStateToProps = state => ({counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({dec, inc, stepChanged}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Counter)