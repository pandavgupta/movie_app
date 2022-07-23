import React, { Component } from 'react'
import { movies } from './get_movies'
export default class Banner extends Component {
  render() {
    let movie = movies.results[0];
    return (
     <>
     {
       movie === ''?
      <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>:
      <div id="carouselExampleInterval" className="carousel slide banner_image" data-bs-ride="carousel" >
            <div className="carousel-inner">
              <div className="carousel-item active text-center banner_image" data-bs-interval="10000" >
                  <img src={`https://image.tmdb.org/t/p/original${movies.results[0].backdrop_path}`} className="d-block w-100 rounded " style={{height: '60vh'}} alt="..."/>
              </div>
              <div className="carousel-item text-center" data-bs-interval="2000" >
                  <img src={`https://image.tmdb.org/t/p/original${movies.results[1].backdrop_path}`} className="d-block w-100 rounded" style={{height: '60vh'}} alt="..."/>
              </div>
              <div className="carousel-item text-center">
                  <img src={`https://image.tmdb.org/t/p/original${movies.results[2].backdrop_path}`} className="d-block w-100 rounded" style={{height: '60vh'}} alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
      </div>
     }
     
   
     </>
        
        
    )
  }
}
