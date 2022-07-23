import React, { Component } from 'react'
import My_movie_data,{Mymovie} from './movie_lists'; 
import { movies } from './get_movies'
export default class Favourite extends Component {
    constructor(){
        super();
        this.state = {
            genres: [],
            curr_genres: "All Genres",
            movie:[]
        }
    }
    async componentDidMount(){
        // console(movies)
        let  genreid= {28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy" ,
            80: "Crime" ,
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western"
       };
      let old_data = JSON.parse(localStorage.getItem('favourite_movies_list') || "[]")
      let tmp = []
    //   console.log(old)
      tmp.push("All Genres")
      old_data.forEach((movieObj)=>{
        if(!tmp.includes(genreid[Mymovie.genre_ids[0]])){

            tmp.push(genreid[Mymovie.genre_ids[0]]);
        }
      })
      this.setState({
        genres: [...tmp],
        movie: [...old_data]
      })
    }
  render() {
    let  genreid= {28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy" ,
    80: "Crime" ,
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
   };
    return (
        <div>
        <>
        <div className='main fav_main ' >
            <div className="row">
                <div className="col-3" >
                    <ul className="list-group">
                        {
                            this.state.genres.map((values)=>{
                             return   this.state.curr_genres === values?  <li className="list-group-item" style={{background:'blue',color:'white', fontweight:'bold'}}>{values}</li> :
                                 <li className="list-group-item">{values}</li>
                            })
                        }
                       
                    </ul>
                </div>
                <div className="col-1" >
                </div>
                <div className="col-8">
                    <div className='row '>
                       <div className='input-group col'>
                          <span className="input-group-text" id="basic-addon1"></span>
                          <input type="text" className="form-control  " placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                       </div>
                        <div className='col-1 '>
                          <input type="number" className="form-control" placeholder="length" value="5"/>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col"><strong>Title</strong></th>
                            <th scope="col"><strong>Genre</strong></th>
                            <th scope="col"><strong>Popularity</strong></th>
                            <th scope="col"><strong>Rating</strong></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                this.state.movie.map((movieObj)=>{

                                   return <tr>
                                        <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top " style={{width:'5rem'}}/> {movieObj.original_title}</td>
                                        <td>{genreid[movieObj.genre_ids[0]]}</td>
                                        <td>{movieObj.popularity}</td>
                                        <td>{movieObj.vote_average}</td>
                                        <td ><button type="button" className="btn btn-primary">Delete</button></td>
                                    </tr>
                                })
                            }
                            
                            
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>    
        </div>
        
       </>
        </div>
      
    )
  }
}
