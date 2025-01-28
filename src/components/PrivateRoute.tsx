import React,{useEffect,useContext,useRef,useState} from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from './../context/AppContext.tsx';

export default function PrivateRoute({ children }) {
  // const timeoutRef = useRef(null);
  // const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
  // const { state } = useContext(AppContext);
  // const { userData } = state;

  // useEffect(() => {
  //   if (userData) {
  //     setIsUserDataLoaded(true);
  //     clearTimeout(timeoutRef.current);
  //   } else {
  //     timeoutRef.current = setTimeout(() => {
  //       setIsUserDataLoaded(true);
  //     }, 1000);
  //   }
  // }, [userData]);

  const isLogged = sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser')
    
  return (
    isLogged ? (
    children
  ) : (
    <Navigate
      to="/login"
    />
  ));
}
