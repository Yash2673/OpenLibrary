const initState = {
    authError : null
}

export const AuthReducer = (state=initState,action)=>{

    switch(action.type){
        case 'Login_Error' : 
            console.log('Login Error');
            return{
                ...state,
                authError : 'Login Failed'
            }
        
        case 'Login Success' :
            console.log('Login Success');
            return{
                ...state,
                authError : null
            }

        case 'Logout_Success' : 
            console.log("Logged Out Successfully");
            return state;

        case 'Signup_Success' : 
            console.log("Signed Up Successfully");
            return{
                ...state,
                authError:null
            }

        case 'Signup_Error' : 
            console.log("Signup Error",action.err);
            return{
                ...state,
                authError:action.err.message
            }
        
        default:
            return state;
    }
}