import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from './../context/AppContext.tsx';
// import FallbackComponent from './fallbackComponent';

export default function PrivateRoute({ children }) {
  // const timeoutRef = useRef(null);
  // const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
  // const { state } = useContext(AppContext);
//   const { userDetails } = state;

//   useEffect(() => {
//     if (userDetails?.[0]) {
//       setIsUserDataLoaded(true);
//       clearTimeout(timeoutRef.current);
//     } else {
//       timeoutRef.current = setTimeout(() => {
//         setIsUserDataLoaded(true);
//       }, 3000);
//     }
//   }, [userDetails]);

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
