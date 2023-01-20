import { CAPSULE_FAILURE, CAPSULE_REQUEST, CAPSULE_SUCCESS } from "./capsule.types"

const intitialData = {
    loading: false,
    error: false,
    capsules: [],
    errorMessage: null
}

export const capsuleReducer = (state = intitialData, { type, payload }) => {
    switch (type) {

        case CAPSULE_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case CAPSULE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: payload
            }
        }
        case CAPSULE_SUCCESS: {
            return {
                loading: false,
                error: false,
                capsules: payload
            }
        }
        default: {
            return state
        }
    }
}