import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProfilePage from "../pages/ProfilePage/profile.page"
import ErrorPage from "../pages/ErrorPage/error.page"
import TodoPage from "../pages/TodoPage/todo.page"
import Document from "../components/Document"
import Freelance from "../pages/FreelancePage/FreelancePage"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Document />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/todo",
                element: <TodoPage />
            },


            {
                path: "/profile/:userTag",
                element: <ProfilePage />
            },
            {
                path: "/@issue",
                element: <h1> Issue </h1>
            },
            {
                path: "/freelance",
                element: <Freelance />

            }

        ]
    },




])

function RouteMap() {
    return (
        <RouterProvider router={router} />
    )
}

export default RouteMap