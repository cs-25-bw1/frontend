import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initWorld } from '../store/app/actions'

const World = props => {
  console.log('useEffect:::', props)
  useEffect(() => {
    props.initWorld()
  }, [])
  return (
    <div>
      {console.log('world -- props', props)}
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    world: state.world,
    error: state.error,
  }
}

export default connect(mapStateToProps, { initWorld })(World)
