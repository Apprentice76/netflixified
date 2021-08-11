const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
const api = 'https://api.themoviedb.org/3/'

const url = (type, params='') => `${api}${type}?api_key=${TMDB_API_KEY}&language=en-US${params}&page=1`

const requests = {
	trendingNow: url('trending/all/week'),
	fetchOriginals: url(
		'discover/movie',
		'&sort_by=popularity.desc&include_adult=true&include_video=false'
	),
	topRated: url('movie/top_rated'),
	action: url(
		'discover/movie',
		'&include_adult=false&include_video=false&with_genres=28'
	),
	comedy: url(
		'discover/movie',
		'&include_adult=false&include_video=false&with_genres=35'
	),
	romance: url(
		'discover/movie',
		'&include_adult=false&include_video=true&with_genres=10749'
	),
	documentaries: url(
		'discover/movie',
		'&include_adult=false&include_video=false&with_genres=99'
	),
}

export default requests