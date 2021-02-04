import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	handleTermSubmit = async (term) => {
		const res = await youtube.get('/search', { params: { q: term } });
		this.setState({ videos: res.data.items });
		// console.log(res.data.items);
	};

	onVideoSelect = (video) => {
		console.log('clg from the app', video);
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.handleTermSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={this.onVideoSelect}
				/>
			</div>
		);
	}
}
export default App;
