
import './App.css'
import UserContextProvider from './Context/UserContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'


function App() {

  return (
    <UserContextProvider>
      <h1>Context API - Redux</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
