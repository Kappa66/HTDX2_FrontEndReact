import React, { useState } from 'react'
import get from "axios"
import { useEffect } from 'react'

function Ecommerce() {
    //Write the logic to connect to fakeStore API
    //useEffect() --> API CAlls
    const [productData,setProductData] = useState({})
    const [tempData,setTemp] = useState('')
    const [weatherDesc,setWeatherDesc] = useState('')
    const [weatherIcon,setWeatherIcon] = useState('')

    
    
    
    useEffect(function()
    {
        async function apicall()
        {
            
               await get("https://api.openweathermap.org/data/2.5/weather?lat=1.352083&lon=103.819839&appid=bef94d326afa669c099b207c6a04a86b")
                .then(function(result)
                {
                    console.log(result.data)
                    setProductData(result.data)
                    setTemp(result.data.main.temp)
                    setWeatherDesc(result.data.weather[0].description)
                    setWeatherIcon(result.data.weather[0].icon)
                })
                .catch(function (error)
                {
                    console.log(error)
                })
            
        
        }
        apicall()
        const interval = setInterval(() => {
            apicall();
          }, 5 * 60 * 1000);
        console.log({productData})

        return () => clearInterval(interval) 
        //const interval = setInterval(apicall(),20000)

        

        // get("https://api.openweathermap.org/data/2.5/weather?lat=1.352083&lon=103.819839&appid=bef94d326afa669c099b207c6a04a86b")
        // .then(function(result)
        // {
        //     console.log(result.data)
        //     setProductData(result.data)
        // })
        // .catch(function (error)
        // {
        //     console.log(error)
        // })
        // get("https://fakestoreapi.com/products")
        // .then(function(result)
        // {
        //     console.log(result.data)
        //     setProductData(result.data)
        // })
        // .catch(function (error)
        // {
        //     console.log(error)
        // })
    },[])

    return (
        <div>Ecommerce
            {productData.main.temp}
            <h2>{tempData}</h2>
            <h2>{weatherDesc}</h2>
            <img src={"http://openweathermap.org/img/w/"+weatherIcon+".png"} width={200} height={300}/>            
            {
                
                
                // //let obj: {};
               
                
               

                // productData.map(function(i)
                // {
                //     return(
                //         <div>
                //         <h2>{i.title}</h2>
                //        <img src={i.image} width={200} height={300}/>
                        
                //         </div>
                //     )
                // }
    
                // )
            }
        </div>
      )
//   return (
//     <div>Ecommerce
//         {
//             productData.map(function(i)
//             {
//                 return(
//                     <div>
//                     <h2>{i.title}</h2>
//                    <img src={i.image} width={200} height={300}/>
                    
//                     </div>
//                 )
//             }

//             )
//         }
//     </div>
//   )
}

export default Ecommerce