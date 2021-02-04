import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	handleInputchange = (e) => {
		this.setState({ term: e.target.value });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		//TODO: make sure we use callback from parent component
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form onSubmit={this.handleFormSubmit} className='ui form'>
					<div className='field'>
						<label>Video Search</label>
						<input
							type='text'
							value={this.state.term}
							onChange={this.handleInputchange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
