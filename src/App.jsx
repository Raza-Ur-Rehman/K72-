import { Route, Routes } from "react-router-dom"
import Index from "./Router/Index";



const App = () => {

  
const routes = Index();


return (
    <div className="text-white">
      
      <Routes>
        {routes.map(({ path, element }, key) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
      



      
    </div>
  )
}

export default App
