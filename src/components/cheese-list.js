import React from 'react';
import {connect} from 'react-redux';
import {fetchCheese} from '../actions/cheese';


class CheeseList extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchCheese());
	}

	render() {
	const cheeseList = this.props.cheeses.map((item) => (
		<li>{item}</li>
	)); 
    return (
		<ul>
			{cheeseList}
    </ul>
		);
	}
}

const mapStateToProps = state => ({
	cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList);

