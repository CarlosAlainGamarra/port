import App from './App'
import Wellcome from './components/Wellcome'

//Router
import { Routes, Route } from 'react-router-dom'

function Index() {
  return (
    <div>     
      <Routes>
        <Route path='/main' element={<App />} />
        <Route path='/' element={<Wellcome />} />
      </Routes>
    </div>
  )
}

export default Index