const ApiRoutes = {
    LOGIN:{
        path:'/users/login',
        authenticate:false
    },
    SIGNUP:{
        path:'/users/createUser',
        authenticate:false
    },
    GET_ALL_RECIPES:{
        path:'/recipes/getAllRecipes',
        authenticate:true
    },
    GET_ALL_USERS:{
        path:'/users/getAllUsers',
        authenticate:true
    },
    GET_RESET_LINK:{
        path:'/users/forgetPassword',
        authenticate:false
    },
    PASSWORD_RESET:{
        path:'/users/resetpassword',
        authenticate:false
    }
}

export default ApiRoutes