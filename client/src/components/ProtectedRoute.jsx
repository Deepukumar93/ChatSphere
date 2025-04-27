import React from 'react'
import { useSelector } from 'react-redux'

const Protected = ({children}) => {

    const {isAuthenticated} = useSelector(state=>state.userReducer)
    console.log(isAuthenticated)

  return (
    children
  )
}

export default Protected
