import Login from "../components/Login"
import { Navigate } from "react-router-dom"
import SignUp from "../components/SignUp"
import Recipes from '../components/recipes'
import Users from "../components/users"
import Create from '../components/recipes/Create'
import View from "../components/recipes/View"


const AppRoutes = [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/recipes',
        element:<Recipes/>
    },
    {
        path:'/recipes/create',
        element:<Create/>
    },
    {
        path:'/recipes/:id',
        element:<View/>
    },
    {
        path:'/users',
        element:<Users/>
    },
    {
        path:'*',
        element:<Navigate to='/login'/>
    }
]
export default AppRoutes