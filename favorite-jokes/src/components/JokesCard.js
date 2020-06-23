import React, {useState, useEffect} from 'react'
import axios from "axios"

const JokesCard = ({ joke }) => {
  const url = 'http://localhost:4994/api'
  const [saved, setSaved] = useState()
  
	useEffect(()=>{
		setSaved(({ new_joke:Object.values({joke})[0]}))
	}, [])
	console.log(saved)
	
  
   const saveJoke = () => {
			
				axios
					.post(`${url}/here`, saved)
					.then((res) => {
						console.log(res)
						
					})
					.catch((err) => {
						console.log('Yep you found the error!')
					})
			}
  return (
			<div>
				{joke}
				<button onClick={saveJoke}>Save</button>
			</div>
		)
}

export default JokesCard
