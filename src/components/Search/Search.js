import React from 'react';


const Search = (props) => {


	return (

		<form className="form" onSubmit={props.getData} >
			<input type="text" name="username" placeholder="mladensalipurovic"/>
			<button className="button">Search</button>
		</form>
	)
}

export default Search;