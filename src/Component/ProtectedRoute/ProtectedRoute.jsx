import Login from './../Login/Login';

export default function ProtectedRoute({userData, children,saveUserData}) {
    if(userData === null){
        return children
        // return <Login saveUserData={saveUserData}/>
    }
    else{
        return children;
    }
}
