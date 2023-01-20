import { ROCKET_FAILURE, ROCKET_REQUEST, ROCKET_SUCCESS } from "./rocket.types"


export const getRocketData = () => async (dispatch) => {
    dispatch({ type: ROCKET_REQUEST })
    try {
        const res = await fetch(`https://api.spacexdata.com/v3/rockets`)
        const data = await res.json()
        console.log(data)
        dispatch({ type: ROCKET_SUCCESS, payload: data })
    } catch (e) {
        dispatch({ type: ROCKET_FAILURE, payload: e.message });
    }
}


export const getFilterRocketData = (url) => async (dispatch) => {
    dispatch({ type: ROCKET_REQUEST })
    try {
        const res = await fetch(url)
        const data = await res.json()
        dispatch({ type: ROCKET_SUCCESS, payload: data })
    } catch (e) {
        dispatch({ type: ROCKET_FAILURE, payload: e.message });
    }
}