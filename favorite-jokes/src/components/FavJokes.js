import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FavJokes = () => {
	const url = 'http://localhost:4994/api'
	const [jokes, setJokes] = useState([])
	
	useEffect(() => {
		axios
			.get(`${url}/here`)
			.then((res) => {
				console.log(res.data)
				setJokes(res.data)
			})
			.catch((err) => {
				console.log('Yep you found the error!')
			})
	},[])

	

	return (
		<div>
			{jokes.map((joke, index) => {
				return (
					<div key={index}>
						{joke.new_joke}
					</div>
				)
			})}
		</div>
	)
}

export default FavJokes
