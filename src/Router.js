import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Detail from "./details";
import Basket from "./Basket";


const Nav = () => {
    let routes = [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Homepage/>    
                },
                {
                    path: "/details/:id",
                    element: <Detail/>
                },
                {
                    path: "/basket",
                    element: <Basket/>
                }
            ]
        }
    ];

    let element = useRoutes(routes);

    return (
        <div>
            {element}
        </div>
    )
}

export default Nav;