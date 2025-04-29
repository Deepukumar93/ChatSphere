// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import {Toaster} from 'react-hot-toast'
// import {Login} from './store/slice/user/user.slice'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileThunk,getOtherUserThunk } from './store/slice/user/user.thunk';
function App() {

  // const {isAuthenticated} = useSelector(state=>state.userReducer)
  // console.log(isAuthenticated)
  const dispatch = useDispatch();

useEffect(() => {
  (async () => {
    await dispatch(getUserProfileThunk());
    await dispatch(getOtherUserThunk());
  })();
}, []);

  return (

    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />

    </>

  );
}

export default App;
