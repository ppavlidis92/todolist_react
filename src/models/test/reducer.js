
export const initState = {textFieldValue: 'Username', passwordValue: 'Password', isLoggedIn: false, count: 0} 

const reducer = (state=initState, action) => {
    switch(action.type){
        case 'UPDATE_TEXT': {
            return {
                ...state, textFieldValue: action.payload
            }   
        }
        case 'UPDATE_PASS': {
            return {
                ...state, passwordValue: action.payload
            }   
        }
        case 'LOGIN': {
            return {
                ...state, isLoggedIn: true
            }
        }
        case 'UPDATE': {
            return {
                ...state, count: action.payload.valid_card
            }
        }

        default: {
            return state
        }
    }
}


export default reducer