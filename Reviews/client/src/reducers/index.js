import { GET_REVIEWS, SORT_STAR, SWITCH_VERIFIED, CHANGE_SORT, CHANGE_SKU } from '../constants/action-types'

const iniitialState = {
    reviews: [],
    sku: 1,
    api: '/reviews',
    starSort: false,
    sortingStar: 0,
    verified: false
}

function rootReducer(state = iniitialState, action) {

    if (action.type === GET_REVIEWS) {
        return {
            ...state,
            reviews: [...action.payload]
        }
    }

    if (action.type === SORT_STAR) {
        return {
            ...state,
            ...action.payload
        }
    }

    if (action.type === SWITCH_VERIFIED) {
        return {
            ...state,
            ...action.payload
        }
    }

    if (action.type === CHANGE_SORT) {
        return {
            ...state,
            ...action.payload
        }
    }

    if (action.type === CHANGE_SKU) {
        return {
            ...state,
            ...action.payload
        }
    }

    return state
}

export default rootReducer