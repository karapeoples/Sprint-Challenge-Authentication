import React, {useState, useEffect} from 'react'
import axios from 'axios'
import JokesCard from "./JokesCard"


const Jokes = () => {
  const url = "http://localhost:4994/api"
  const [jokes, setJokes] = useState([])
  

  useEffect(() => {
    axios 
      .get(`${url}/jokes`)
      .then(res => {
        console.log(res.data)
        setJokes(res.data)
        
      })
      
      .catch(err => {
      console.log("Yep you found the error!")
    })
  },[])

 
				
      
      

  
  
 

  return (
    <div style={{marginTop: "5%"}}>
      
      {jokes.map((joke, index) => {
        return (
          <div key={index}>
            <JokesCard id={joke.id} joke={joke.joke}/>
          </div>
        )
      })
      }
    </div>
  )
}

export default Jokes
