// useEffect
import React,{useState,useEffect} from 'react'

const Load = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response)
        .then(data=>{
            console.log(data)
            setData(data)
        })
        .catch(error=>{
            console.log(error)
        })

    })
    return (
        <div>
        {data.map(item => (
          <div key={item.id}>
            <h1>{item.body}</h1>
            <h2>{item.title}</h2>
          </div>
        ))
    }
        </div>
       
    )
}
    
    

export default Load;