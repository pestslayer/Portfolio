import {Routes, Route, BrowserRouter} from "react-router-dom"
import routes from './config/routes'
import Navbar from "./components/Navbar"

function App() {
  return (
    // make sure to change to hashrouter before deploy!
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route: any, index: any) => (
          <Route
          key={index}
          path={route.path}
          element={
            <route.component />
          }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
