import React from 'react'
import {useState,useRef} from 'react'
import { BG_URL, USER_AVATAR } from '../utlis/constant'
import { checkValidData } from '../utlis/validate.js'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utlis/firebase.js'
import { useDispatch } from 'react-redux';
import { addUser} from '../utlis/userSlice';
import Header from './Header.js';



const Login = () => {
    const dispatch = useDispatch();

    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState()
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm)
    }
  
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        seterrorMessage(message);
        if(message) return;

        if(!isSignInForm){
            //Sign Up logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        
          }).catch((error) => {
           seterrorMessage(error.message);
          });
        
        })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage)
      
        });
        }else{
          //Sign In logic
          signInWithEmailAndPassword(auth,email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;   
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + "-" + errorMessage);
          
          });
        }
    }
  
  return (
    <div >
      <Header/>
      <div className="absolute w-full h-full">
        <img className="object-cover w-full h-full" src={BG_URL} alt="logo" />
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && (
        <input ref={name} type='text' placeholder='Full Name' className='my-4 p-4 w-full bg-gray-700 rounded-md` bg-opacity-60 border border-white border-opacity-30'/>)}
       
        <input ref={email} type='text' placeholder='Email Address' className='my-4 p-4 w-full bg-gray-700 rounded-md bg-opacity-60 border border-white border-opacity-30'/>
        <input ref={password}type='password' placeholder='Password' className='my-4 p-4 w-full bg-gray-700 rounded-md bg-opacity-60 border border-white border-opacity-30'/>
        <p className='text-red-500'>{errorMessage}</p>
        <button className='p-4 my-4 bg-red-500 w-full rounded-md' onClick={handleButtonClick} >{isSignInForm ? "Sign In": "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up": "Already registered? Sign In Now."}</p>
      </form>
     
    </div>
  )
}

export default Login;
