import { Router, RouterProvider } from 'react-router-dom'
import { routes } from './routes/DataModeRoute'


function App() {

  return (
    <>
      <RouterProvider router = {routes}/>
    </>
  )
}

export default App
