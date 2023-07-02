import React, { useContext } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth,provider } from './firebase'
import { useNavigate } from 'react-router-dom'
import { myBasket } from './Links'
function LoginGoogle() {

    const navigate = useNavigate()

    const{set} = useContext(myBasket)

    function pleaseSignin()
    {
       //logic to display the window/popup

       signInWithPopup(auth, provider)
       .then(function()
       {
            set(true)
            navigate("/books")
            // const userName = auth.currentUser.displayName
            // const email = auth.currentUser.email
            // console.log(userName, email)
            // alert("Login was sucessful")
        
       })
       .catch(function(error)
        {
            alert("Login was not sucessful")
        })
    }

  return (
    <div>
        <button onClick={pleaseSignin}>Sign In With Google</button>
    </div>
  )
}

export default LoginGoogle