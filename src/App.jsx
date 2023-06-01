import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import VMS from './pages/Dashboard/VMS'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'
import Buttons from './pages/UiElements/Buttons'
import Alerts from './pages/UiElements/Alerts'
import FormElements from './pages/Form/FormElements'
import FormLayout from './pages/Form/FormLayout'
import Tables from './pages/Tables'
import Settings from './pages/Settings'
import Chart from './pages/Chart'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is authenticated, e.g. by checking if a token is present in local storage
  useEffect(() => {

    const token = localStorage.getItem('token')
    setIsAuthenticated(token != null)
  }, [])

  const preloader = document.getElementById('preloader')

  if(preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    !loading && (
      <>
        <Routes>
          <Route path='/auth/signin' element={<SignIn />} />
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}  >
              <Route exact path='/' element={<VMS />} />
              <Route exact path='/vcenter/lists' element={<VMS />} />
              <Route exact path='/proxmox/lists' element={<VMS />} />
              <Route exact path='/vms/lists/all' element={<VMS />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/forms/form-elements' element={<FormElements />} />
              <Route path='/forms/form-layout' element={<FormLayout />} />
              <Route path='/tables' element={<Tables />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/chart' element={<Chart />} />
              <Route path='/ui/buttons' element={<Buttons />} />
              <Route path='/ui/Alerts' element={<Alerts />} />
          </Route>
          {/* <Route path='/auth/signup' element={<SignUp />} /> */}
        </Routes>
      </>
    )
  )
}

export default App
