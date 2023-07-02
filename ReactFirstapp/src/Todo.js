import React from 'react'
import {useState} from "react"

function Todo() {

    let [myData, setMyData] = useState(["Eating","Playing", "Dancing", "Cooking"])
    //myData = ["Eating","Playing", "Dancing", "Cooking"]

    let [task,setTask] = useState("");
    //task ="Coding"
    function collectData(event){

        /* console.log("hi") */

        console.log(event.target.value)
        setTask(event.target.value)
    }

    function clickedIt(){
        //Logic to send task variable to myData array
        setMyData([...myData,task])
        //setMyData([...myData,task])//It means we are updating  the array present in myData variable

    }
    
  return (
    <div>Enter Task:<input type ="text" onChange={collectData}/>
        <button onClick={clickedIt}>Submit</button>

        {/*Logic to iterate the array(myData) and display the three tasks one by one*/}

        {
            myData.map(function(i){

                return <li>{i}</li>
            })
        }
    </div>
    
  )
}

export default Todo