import axios from 'axios';

const KEY = 'AIzaSyC1-EhZzVlNVn83zzTo1PKObFF1COJ2pdc';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: { part: 'snippet', maxResults: 5, key: KEY },
});
