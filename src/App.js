import React, { Suspense, lazy } from 'react'
// import SignIn from './pages/SignIn'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Layout from './pages/layout/Layout'
import Cards from './pages/Cards'
import Modalpage from './pages/Modal'
import Tables from './pages/Tables'
import Forms from './pages/Forms'
const SignIn = lazy(()=>import("./pages/SignIn"))


function App() {
  return (
    <>
    <div className='layout'>
      <Layout>
<Routes>
  <Route path='/' element ={
  <Suspense fallback = {<h1>loading....</h1>}>
<SignIn />
  </Suspense>
  }/>
  <Route path='/signup' element ={<Signup/>}/>
  <Route path='/cards' element ={<Cards/>}/>
  <Route path='/modals' element ={<Modalpage/>}/>
  <Route path='/table' element ={<Tables/>}/>
  <Route path='/forms' element ={<Forms/>}/>
</Routes>
</Layout>
    </div>
    </>
  )
}

export default App
