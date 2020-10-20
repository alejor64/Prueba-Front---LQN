import React from 'react'
import { useDispatch } from 'react-redux'
import { getCharacterAction } from '../actions/actions'

const InitialScreen = () => {
    const dispatch = useDispatch()

    const handleGetCharacters = () => {
        dispatch(getCharacterAction())
    }

    return (
        <button onClick={handleGetCharacters}>
            Call
        </button>
    )
}

export default InitialScreen
