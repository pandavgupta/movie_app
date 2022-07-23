import React, { Component, createContext } from 'react'
// import { movies } from './get_movies';
const axios = require('axios')
let Mymovie = createContext();
export default class My_movie_data extends Component {
  constructor(){
    super();
    this.state ={
      hover: '',
      page:[1],
      curr_page:1,
      movies: [],
      favourite_movie: [...JSON.parse(localStorage.getItem('favourite_movies_list')) ]
    }
  }
  async componentDidMount(){
    //side effect
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.curr_page}`)
      let data = res.data
      this.setState({
        movies: [...data.results]
      })
      // console.log(data)
      // console.log("mounting")
    }
    catch(err){
      console.log(err)
    }
  }
  changeMovies= async()=> {
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.curr_page}`)
      let data = res.data
      this.setState({
        movies: [...data.results]
      })
    }
    catch(err){
      console.log(err)
    }
    
  }
  handle_Right= ()=>{
    let temparr = []
    for(let i =1; i<=this.state.page.length+1; i++)
       temparr.push(i);
      //  setState work asynchronously 
       this.setState({
         page: [...temparr],
         curr_page: this.state.curr_page+1
       })
       this.changeMovies()
       
  }
  handle_page=(value)=>{
    if(value != this.state.curr_page ){
      this.setState({
        curr_page: value
      },this.changeMovies)
      
    }
  }
 handle_favourite=(movie)=>{
   let old_data = JSON.parse(localStorage.getItem('favourite_movies_list') || '[]') 
      if(this.state.favourite_movie.includes(movie.id)){
          old_data = old_data.filter((movie_id)=>movie_id!=movie.id);
      }
      else{
        old_data.push(movie.id)
      }
      this.setState({
        favourite_movie: [...old_data]
      })
      localStorage.setItem('favourite_movies_list', JSON.stringify(old_data))
 }


  render() {
       Mymovie = this.state.movies; 
      //  console.log(Mymovie)
      // let movie_data = movies.results;
      // console.log("render")
    return (
        <>
        {
          this.state.movies.length === ''?
         <div className="spinner-border" role="status">
         {/* <span class="visually-hidden">Loading...</span> */}
         <h1>no content</h1>        
          </div>:
          <>
            <h3 className='text-center ' style={{margin: "3rem"}}><strong>Trending</strong></h3>
            <div className=' d-flex justify-content-center align-content-start  flex-wrap' >
             {/* <div className='card box1' > */}
                {
                  this.state.movies.map((movieObj)=>(
                  <div className="card box1 d-flex" onMouseEnter={()=>{this.setState({hover:movieObj.id})}} onMouseLeave={()=>{this.setState({hover:""})}} >
                    <h5 className="card-title movie_title" >{movieObj.original_title}</h5>
                      {
                        this.state.hover === movieObj.id &&
                        <div className='align-self-end add_favourite'>
                        <button  className="btn btn-primary" onClick={()=>{this.handle_favourite(movieObj)  }}> {this.state.favourite_movie.includes(movieObj.id)?"remove":"Add"}</button>
                        </div>
                      }
                     <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top " alt={movieObj.title}/>
                      {/* <p className="card-text txt" ><strong>{movieObj.original_title}: </strong>{movieObj.overview}</p> */}
                  </div>
                 ))
                }
             {/* </div> */}
           </div>
           <nav aria-label="..." className='container center'>
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <span class="page-link">Previous</span>
                </li>
                {
                  this.state.page.map((value)=>{
                    return <li class="page-item"><a class="page-link" onClick={()=>{this.handle_page(value)}} >{value}</a></li>
                  })
                }
                <li class="page-item">
                  <a class="page-link" onClick={this.handle_Right}>Next</a>
                </li>
            </ul>
            </nav>
          </>
        }
        </>
    )
  }
}
export{ Mymovie};