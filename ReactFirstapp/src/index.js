// Container(react-dom) --> module
import{render} from "react-dom"
import Contact from "./Contact"
import Todo from "./Todo"
import Login from "./Login"
import Ecommerce from "./Ecommerce"
import Links from "./Links"

// import { Display } from "./Components/Display"
// import { Launch } from "./Components/Launch"


//Function  --> Component
function App(){

    return(
        <div>
           {/* <Links/> */}
           <Ecommerce/>
        </div>

        

        //How to store the data in react
        //Function  --> userState()

        
    )
}

render(<App/>, document.getElementById("root"))

{/* <div style={{display: "flex"}}>
            {/* <Contact image="https://www.clker.com/cliparts/r/l/z/n/r/F/male-avatar-hi.png" name="Alex" message="Wish you a good lesson"/>
            <Contact  image="https://clipground.com/images/img_avatar-clipart-6.png" name="Sally" message="Great Day"/>
            <Contact  image="https://clipground.com/images/img_avatar-clipart-6.png" name="Sally" message="Great Day"/>
            <Contact image="" name="" message=""/> 
            
           
        </div> */}