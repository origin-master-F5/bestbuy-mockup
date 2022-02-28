import { GET_REVIEWS, SORT_STAR, SWITCH_VERIFIED, CHANGE_SORT, CHANGE_SKU } from '../constants/action-types'
import axios from 'axios'

export const getReviews = () => (dispatch, getState) => {
    const { api, sku } = getState()
    return axios.get(`${api}/${sku}`, { baseURL: "http://127.0.0.1:3003" })
        .then(({ data }) => dispatch({ type: GET_REVIEWS, payload: data }))
        .catch(err => console.log('failed to get reviews. ERROR-->', err))
}

export function sortByStar(payload) {
    return {
        type: SORT_STAR,
        payload
    }
}

export function switchVerified(payload) {
    return {
        type: SWITCH_VERIFIED,
        payload
    }
}

export function changeSort(payload) {
    return {
        type: CHANGE_SORT,
        payload
    }
}

export function changeSku(payload) {
    return {
        type: CHANGE_SKU,
        payload
    }
}