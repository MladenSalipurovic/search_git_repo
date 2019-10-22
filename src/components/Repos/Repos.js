import React from 'react';
import './Repos.css';


const Repos = (props) => {
	
	const reposLayout = props.repos.map(repo => {
		let formatedDate = new Date(repo.created_at);
		return (
			<div className="repo" key={repo.id}>
				<h3 className="repo-name">{repo.name}</h3>

				<p className="repo-desc">{repo.description}</p>

				<h3 className="repo-date">{formatedDate.toLocaleDateString()}</h3>

				<a className="repo-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">Go to Github repo</a>

			</div>
			
		)
	})
	return (
		<div className="repo-container">{reposLayout}</div>
	)
}

export default Repos;