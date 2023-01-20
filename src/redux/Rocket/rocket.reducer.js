import { ROCKET_FAILURE, ROCKET_REQUEST, ROCKET_SUCCESS } from "./rocket.types"


const intitialData = {
    loading: false,
    error: false,
    rockets: [],
    errorMessage: null
}

export const rocketReducer = (state = intitialData, { type, payload }) => {
    switch (type) {

        case ROCKET_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case ROCKET_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: payload
            }
        }
        case ROCKET_SUCCESS: {
            return {
                loading: false,
                error: false,
                rockets: payload
            }
        }
        default: {
            return state
        }
    }
}