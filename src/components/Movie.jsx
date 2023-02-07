function Movie(props) {
  console.log(props)
  const { title, year, id, type, poster } = props
  return (
    <div className="row">
      <div className="col">
        <div className="card movie">
          <div className="card-image">
            <img src={poster} alt="poster" />
          </div>
          <span className="card-title">{title}</span>
          <div className="type">
            <p>{type}</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export { Movie }
