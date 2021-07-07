import * as AT from '../actions/actionsTypes'
import React from 'react'

const initialState = {
    activeUser : ""
}

const activeUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.ON_LOGIN:
            return {
                ...state,
                activeUser: action.payload
            };
        case AT.ON_LOGOUT:
            return {
                ...state,
                activeUser: ""
            };

    }
}

export default activeUserReducer;
