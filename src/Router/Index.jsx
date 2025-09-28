import Agence from "../pages/Agence.jsx"
import Home from "../pages/Home.jsx"
import Project from "../pages/Project.jsx"

 
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


