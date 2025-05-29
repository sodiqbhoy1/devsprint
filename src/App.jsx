
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router'
import CurriculumPage from './components/CurriculumPage'

const App = () => {
  return (

    <>
    

    <Routes>
      <Route path='' element={ <Homepage/> }  />
      <Route path='/curriculum' element={ <CurriculumPage/> }  />

    </Routes>


    
    </>

  )
}

export default App
