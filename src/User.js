import React from 'react';

const User = (props) => {

	return (

		<div onSubmit={props.getUserData}>
			<input type="text" name="username"/>
			<button>Search</button>
		</div>
	)
}

export default User;