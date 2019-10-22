import React from 'react';
import './Cards.css';


const Cards = (props) => {
	let filteredUsers = props.users.filter(user =>{
		return user.login.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1;
	})
	const usersLayout = filteredUsers.map(user => {
		return (
			<div className="card" key={user.id} >
				<img className="avatar" src={user.avatar_url} alt="Github user avatar"/>
				<div className="">
				<h4 className="name"> {user.login}</h4>
					<button
						className="button"
						id={user.login}
						onClick={props.clickHandler}
					>
					Display repos
					</button>
				</div>
				
			</div>
		)
	})
	return (
		<div className="card-container">{usersLayout}</div>
	)
}

export default Cards;