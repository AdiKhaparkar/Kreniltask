import { ActionTypes } from "../constant/constant";

//Initial State
const initialstate={
    Data: [{
        // name: "",
        // age: "",
        // pincode: ""
    }],
    count: false,
    editmodal: false,
    name: "",
    age: "",
    pincode: "",
    index:""
}

//Counter Reducer
 const alertGenerator = ( state= initialstate, action)=>{
    const {payload,type} =action
    switch(type){
        case ActionTypes.ADD:
        return{...state, count: payload }

        case ActionTypes.EDITMOD:
        return{...state, editmodal: payload }

        case ActionTypes.NAME:
        return{ ...state, name: payload }

        case ActionTypes.AGE:
        return{ ...state, age: payload }

        case ActionTypes.PINCODE:
        return{ ...state, pincode: payload }


        case ActionTypes.INDEX:
            console.log(index)
        return{ ...state, index: payload }

        case ActionTypes.DATA:
        return { ...state, Data: [...state.Data, {name: payload.name, pincode: payload.pincode, age: payload.age}] }

        
        
        // case ActionTypes.UPDATE:
        // console.log(payload.name, payload.age, payload.pincode);
        // return { ...state, Data: [...state.Data, {name: payload.name, pincode: payload.pincode, age: payload.age}] }
        

        case ActionTypes.UPDATE:
            let userData=[...state.Data];
            console.log(payload.name, payload.age, payload.pincode);
            userData.splice(payload.index, 1 , {name: payload.name, pincode: payload.pincode, age: payload.age})
        return{...state, Data: userData};



        default:
        return state;
    }
}

export default alertGenerator;