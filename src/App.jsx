
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router'
import CurriculumPage from './components/CurriculumPage'
import Courses from './components/Courses'
import About from './components/About'
import Contact from './components/Contact'
import RegistrationForm from './components/RegistrationForm'

const App = () => {
  return (

    <>
    

    <Routes>
      <Route path='' element={ <Homepage/> }  />
      <Route path='/curriculum' element={ <CurriculumPage/> }  />
      <Route path='/courses' element={ <Courses/> }  />
      <Route path='/about' element={ <About/> }  />
      <Route path='/contact' element={ <Contact/> }  />
      <Route path='/enroll' element={ <RegistrationForm/> }  />
      
    </Routes>


    
    </>

  )
}

export default App
