import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const Protected = ({children}) => {
  const navigate = useNavigate();
  const { isAuthenticated, screenLoading } = useSelector(state => state.userReducer);

  useEffect(() => {
    if (!screenLoading) {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }
  }, [isAuthenticated, screenLoading, navigate]);

  if (screenLoading) {
    return <div>Loading...</div>; // Optional: loading indicator jab tak data load ho raha hai
  }

  return children;
}
export default Protected
