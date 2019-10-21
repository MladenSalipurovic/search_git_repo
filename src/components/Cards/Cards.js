import React from 'react';
import Card from '../Card/Card'

const Cards = (props) => {

	const renderCards = () => {
		props.showCards.map((item, i) => {
			return(
				<Card item={item} key={i}/>
			)
		})
	}
	return (
		<div>{renderCards()}okok</div>
	)
}

export default Cards;