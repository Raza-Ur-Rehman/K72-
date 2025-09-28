import Agence from "../pages/Agence"
import Home from "../pages/Home"
import Project from "../pages/Project"

 
const Index = () => [
     {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/agency",
        element: <Agence />
    },
    {
        path: "/project",
        element: <Project />
    },
];

export default Index;


