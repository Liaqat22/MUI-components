export const reducer = (state , action) =>{
 switch (action.type) {

    case "results":
     return  {...state, APIdata : action.payload }
    case "parameters":
     return  {...state, parameters : action.payload }

    default:
       return state;
}
}