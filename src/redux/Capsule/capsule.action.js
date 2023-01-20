import { CAPSULE_FAILURE, CAPSULE_REQUEST, CAPSULE_SUCCESS } from "./capsule.types"


export const getCapsuleData = (offset = 1) => async (dispatch) => {
    dispatch({ type: CAPSULE_REQUEST })
    try {
        const res = await fetch(`https://api.spacexdata.com/v3/capsules?limit=10&offset=${offset}`)
        const data = await res.json()
        dispatch({ type: CAPSULE_SUCCESS, payload: data })
    } catch (e) {
        dispatch({ type: CAPSULE_FAILURE, payload: e.message });
    }
}


export const getFilterCapsuleData = (url) => async (dispatch) => {
    dispatch({ type: CAPSULE_REQUEST })
    try {
        const res = await fetch(url)
        const data = await res.json()
        dispatch({ type: CAPSULE_SUCCESS, payload: data })
    } catch (e) {
        dispatch({ type: CAPSULE_FAILURE, payload: e.message });
    }
}