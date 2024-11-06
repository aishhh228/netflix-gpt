import React, { useEffect }  from 'react'
import { LOGO, SUPPORTED_LANGUAGES } from '../utlis/constant'
import {signOut} from 'firebase/auth';
import {auth} from "../utlis/firebase";
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"
import {onAuthStateChanged} from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utlis/userSlice";
import { toggleGptSerachView} from "../utlis/gptSlice";
import { changeLanguage } from '../utlis/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const user = useSelector((store) => store.user);
  const showGptSerach = useSelector((store=> store.gpt.showGptSerach))

  const handleSignOut= () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
     
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });  
  };

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       //Sign In
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
       navigate("/browse")
      } else {
       //Signed out
       dispatch(removeUser());
      navigate("/")
      }
    });
    //unsubscribed when component unmounts
    return () => unsubscribe();
  },[]);

  const handleGptSearchClick =() => {
 //toggle
 dispatch(toggleGptSerachView());
  };
  const handleLanguageClick = (e) =>{
    dispatch(changeLanguage(e.target.value))
   
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
    {user && (<div className='flex p-2'>
    {showGptSerach && (
    <select className='font-semibold text-white  bg-gray-900  border border-cyan-300 rounded-sm p-2 m-2' onChange={handleLanguageClick}>
      {SUPPORTED_LANGUAGES.map(lang =><option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
    </select>
    )}
    
    <button className='font-semibold text-white  bg-gray-900  border border-cyan-300 rounded-sm  p-2 m-2' onClick={handleGptSearchClick}>
   
      {showGptSerach ? "Home" : "GPT Search"}
    </button>
    
    <img className="hidden md:block w-12 h-12" alt="usericon" src={user?.photoURL}/>
    <button className='font-bold text-white  bg-rose-700 rounded-md p-2 m-2' onClick={handleSignOut}>Sign Out</button>
    </div>
  )}
    </div>
   
  )
}

export default Header
