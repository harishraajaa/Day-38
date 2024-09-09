const ApiRoutes = {
    LOGIN:{
        path:'/users/login',
        authenticate:false
    },
    SIGNUP:{
        path:'/users/createUser',
        authenticate:false
    },
    GET_ALL_URLS:{
        path:'/urls/getUrlById',
        authenticate:true
    },
    CREATE_URL:{
        path:'/urls/createShortUrl',
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
    },
    ACTIVATE_USER:{
        path:'/users/activateUser',
        authenticate:false
    }

}

export default ApiRoutes