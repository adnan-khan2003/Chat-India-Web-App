// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import './Style.css'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext} from 'react'

function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='Chat-India-Web-App/login'/>
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/Chat-India-Web-App'>
            <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>}/>
            <Route path='/login' element= {<Login/>}/>
            <Route path='/register' element= {<Register/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
