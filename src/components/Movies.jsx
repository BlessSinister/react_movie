import { Movie } from './Movie'

function Movies(props) {
  const { movies = [] } = props

  return (
    <div className="movie__flex">
      {movies.length ? (
        movies.map((item, i) =>
          item.Poster === 'N/A' ? (
            true
          ) : (
            <Movie
              title={item.Title}
              year={item.Year}
              poster={item.Poster}
              type={item.Type}
              key={'data' + i}
            />
          )
        )
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  )
}
export { Movies }
