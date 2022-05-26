const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
const api = 'https://api.themoviedb.org/3/'

const url = (type, params = '') =>
	`${api}${type}?api_key=${TMDB_API_KEY}&language=en-US${params}&page=1`

const requests = {
	trendingNow: url('trending/all/week'),
	fetchOriginals: url(
		'discover/movie',
		'&sort_by=popularity.desc&include_adult=true&include_video=true'
	),
	topRated: url('movie/top_rated'),
	action: url(
		'discover/movie',
		'&include_adult=true&include_video=true&with_genres=28'
	),
	comedy: url(
		'discover/movie',
		'&include_adult=true&include_video=true&with_genres=35'
	),
	romance: url(
		'discover/movie',
		'&include_adult=true&include_video=true&with_genres=10749'
	),
	documentaries: url(
		'discover/movie',
		'&include_adult=true&include_video=true&with_genres=99'
	),
}

export function getGenre(id) {
  const idList = {
    28: ' Action ',
    12: ' Adventure ',
    16: ' Animation ',
    35: ' Comedy ',
    80: ' Crime ',
    99: ' Documentary ',
    18: ' Drama ',
    10751: ' Family ',
    14: ' Fantasy ',
    36: ' History ',
    27: ' Horror ',
    10402: ' Music ',
    9648: ' Mystery ',
    10749: ' Romance ',
    878: ' Sci-Fi ',
    10770: ' TV ',
    53: ' Thriller ',
    10752: ' War ',
    37: ' Western '
  }

  return idList[id]
}

export default requests
