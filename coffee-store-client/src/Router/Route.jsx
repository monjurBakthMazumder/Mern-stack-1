import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Lauout/MainLayout';
import ErrorPage from '../Pages/Errorpage/ErrorPage';
import Home from '../Pages/Home/Home';
import AddCoffee from '../Pages/AddCoffee/AddCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee/UpdateCoffee';
import Details from '../Pages/Details/Details';
const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch("http://localhost:5000/coffees")
            },
            {
                path: '/add-coffee',
                element: <AddCoffee/>
            },
            {
                path: '/update-coffee/:id',
                element: <UpdateCoffee/>,
                loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: '/coffee/:id',
                element: <Details/>,
                loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
            }
        ]
    }
])

export default Route;