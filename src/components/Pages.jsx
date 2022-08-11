import React from 'react'
import Parent from './ContextApi/Parent'
import '../styles/pages.css'
import UseReducerComp from './useReducer/UseReducerComp'

function Concepts() {
  return (
    <div>
      <div className="reactConcepts">
        <div className="ContextApi">
          <UseReducerComp />
          <Parent />
        </div>
      </div>
    </div>
  )
}

export default Concepts