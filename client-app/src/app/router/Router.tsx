import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../feature/home/HomePage";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import ActivityDetails from "../../feature/activities/details/ActivityDetails";
import TestError from "../../feature/errors/TestError";
import NotFound from "../../feature/errors/NotFound";
import ServerError from "../../feature/errors/ServerError";
import LoginForm from "../../feature/users/LoginForm";

export const routes: RouteObject[] =[
    {
        path:'/',
        element: <App/>,
        children:[ 
            {path:'activities',element: <ActivityDashboard />},
            {path:'activities/:id',element: <ActivityDetails />},
            {path:'createActivity',element: <ActivityForm key='create' />},
            {path:'manage/:id',element: <ActivityForm key='manage'/>},
            {path:'login',element: <LoginForm />},
            {path:'errors',element: <TestError/>},
            {path:'not-found',element: <NotFound/>},
            {path:'server-error',element: <ServerError/>},
            {path:'*',element: <Navigate replace to='/not-found'/>},
        ]
    }
]

export const router = createBrowserRouter(routes);