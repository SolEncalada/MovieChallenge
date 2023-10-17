import styles from './MovieDetails.module.css'
import movies from '../components/movies.json'
import { useLocation } from 'react-router-dom'

export function MovieDetails() {
    
    const {pathname} = useLocation();
    const movie = movies.filter((m) => m.id == pathname.split('/')[2])[0]

    console.log(movie)
    const imageUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    return(
    <div className={styles.detailsContainer}>
        <img src={imageUrl} alt={movie.title}/>
    </div>
    )
}