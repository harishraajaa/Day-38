import Login from "../components/Login"
import { Navigate } from "react-router-dom"
import SignUp from "../components/SignUp"
import Recipes from '../components/recipes'
import Users from "../components/users"
import Create from '../components/recipes/Create'
import View from "../components/recipes/View"
import AdminGuard from "./AdminGuard"
import ProtectedRoute from "./ProtectedRoute"


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
        element:<ProtectedRoute><Recipes/></ProtectedRoute>
    },
    {
        path:'/recipes/create',
        element:<ProtectedRoute><Create/></ProtectedRoute>
    },
    {
        path:'/recipes/:id',
        element:<ProtectedRoute><View/></ProtectedRoute>
    },
    {
        path:'/users',
        element:<ProtectedRoute><AdminGuard><Users/></AdminGuard></ProtectedRoute>
    },
    {
        path:'*',
        element:<Navigate to='/login'/>
    }
]
export default AppRoutes