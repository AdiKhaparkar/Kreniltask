import { ActionTypes } from "../constant/constant";

export const modalopen = (data) => ({
    type:ActionTypes.ADD,
    payload:data
})
export const editmodalopen = (data) => ({
    type:ActionTypes.EDITMOD,
    payload:data
})
export const username = (data) => ({
    type:ActionTypes.NAME,
    payload:data
})
export const userage = (data) => ({
    type:ActionTypes.AGE,
    payload:data
})
export const userpincode = (data) => ({
    type:ActionTypes.PINCODE,
    payload:data
})
export const userdata = (name,age,pincode) => ({
    type:ActionTypes.DATA,
    payload:{name,age,pincode}
})
export const updateuserdata = (name,age,pincode) => ({
    type:ActionTypes.UPDATE,
    payload:{name,age,pincode}
})
export const index = (data) => ({
    type:ActionTypes.INDEX,
    payload:data
})