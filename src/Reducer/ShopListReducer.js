export default (currentState, action) => {
    switch(action.type) {
        case "SHOW__SHOPLIST":
        return {...currentState, isOpen: true}
        case "CLOSE__SHOPLIST": 
        return {...currentState, isOpen:false}
        default:
            return currentState;
    }
} 