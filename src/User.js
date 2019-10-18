import React from 'react';

const User = (props) => {

	return (

		<form className="form" onSubmit={props.getUserData}>
			<input type="text" name="username"/>
			<button>Search</button>
		</form>
	)
}

export default User;