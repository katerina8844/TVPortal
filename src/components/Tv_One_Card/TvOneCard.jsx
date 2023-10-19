import React from 'react'

export default function TvOneCard({film}) {
  return (
    <>
        <img src={film.poster} className="card-img-film" alt="..." />
        <div className="card-body-film">
            <h5 className="card-title">{film.title}</h5>
        </div>
      <div> 
      </div>
    </>
  )
}
