import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home/Home";
import Movies from "./Component/Movies/Movies";
import Tv from "./Component/Tv/Tv";
import People from "./Component/People/People";
import About from "./Component/About/About";
import Networks from "./Component/Networks/Networks";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
import Register from "./Component/Register/Register";
import ErrorPage from "./Component/ErrorPage/ErrorPage"
import RouterLayout from "./Component/RouterLayout/RouterLayout";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import MovieDetails from "./Component/MovieDetails/MovieDetails";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from 'react';
import { createBrowserRouter , Navigate, RouterProvider } from "react-router-dom"

export default function App(){
  useEffect(()=>{
    if(localStorage.getItem('userToken')!==null){
      saveUserData();
    }
  },[])
  const [userData, setUserData] = useState(null);
  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }
  function logOut(){
    localStorage.removeItem('userToken');
    setUserData(null);
    return <Navigate to='login'/>
  }
  const routers = createBrowserRouter([
    {
        path: '/' , element : <RouterLayout userData={userData} logOut={logOut}/> , 
        children : [
            {index :true , element:<ProtectedRoute saveUserData={saveUserData}  userData={userData}><Home/></ProtectedRoute> },
            {path :'movies' , element:<ProtectedRoute saveUserData={saveUserData} userData={userData}><Movies/></ProtectedRoute> },
            {path :'tv' , element:<ProtectedRoute saveUserData={saveUserData} userData={userData}> <Tv/></ProtectedRoute>},
            {path :'people' , element: <ProtectedRoute saveUserData={saveUserData} userData={userData}><People/></ProtectedRoute>},
            {path :'about' , element: <ProtectedRoute saveUserData={saveUserData} userData={userData}><About/></ProtectedRoute>},
            {path :'network' , element: <ProtectedRoute saveUserData={saveUserData} userData={userData}><Networks/></ProtectedRoute>},
            {path :'profile' , element: <ProtectedRoute saveUserData={saveUserData} userData={userData}><Profile userData={userData}/></ProtectedRoute>},
            {path :'moviedetails/:id/:mediaType' , element: <ProtectedRoute saveUserData={saveUserData} userData={userData}><MovieDetails userData={userData}/></ProtectedRoute>},
            {path :'login' , element: <Login saveUserData={saveUserData}/>},
            {path :'register' , element: <Register/>},
            {path :'*' , element: <ErrorPage/>},
        ]
    }
  ])
  return <RouterProvider router={routers}/>
}