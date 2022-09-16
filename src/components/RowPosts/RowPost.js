import React, { useEffect ,useState} from 'react';
import Youtube from 'react-youtube';
import {AXIOS} from '../../constants/axios';
import {API_KEY, MOVIE_URL} from '../../constants/constants';
import './RowPost.css';

const RowPost = (props) => {
    const [movies,setMovies] = useState([])
    const [youtubeKey,SetYoutubeKey] = useState('')
    const handleMovie = (key)=>{
        AXIOS.get(`/movie/${key}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length !==0){
                SetYoutubeKey(response.data.results[0].key)
            }else{
                console.log('No Videos found');
            }
        })
        .catch(err=>{
            console.log('Network Error caused');
        })
        // console.log(youtubeKey);
    }
    useEffect(()=>{
        AXIOS.get(props.url)
        .then((response)=> setMovies(response.data.results))
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <>
        <div className='Row'>
            <h2 id='title'>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((movie)=>
                        <img onClick={()=>{handleMovie(movie.id)}} className={props.smallPoster ?  'small-poster':'poster' } src={MOVIE_URL+movie.backdrop_path} alt="" />
                    )
                }
            </div>
        </div>
         {youtubeKey && <Youtube videoId={youtubeKey} onError={()=>SetYoutubeKey('')}  onEnd={()=>SetYoutubeKey('')} opts={opts}/>}
        </>
    );
}

export default RowPost;
