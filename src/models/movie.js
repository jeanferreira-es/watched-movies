
class Movie {
    constructor(movie){
        this.title = movie.title;
        this.original_date = movie.original_title;
        this.year;
        this.genres = movie.genres;
        this.runtime = movie.runtime;
        this.overview = movie.overview;
        this.release_date = movie.release_date;
        this.vote = movie.vote_average;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        this.title = title;
    }

    getOriginalDate(){
        return this.original_date;
    }

    setOriginalDate(original_date){
        this.original_date = original_date;
    }

    getYear(){
        return this.year;
    }

    setYear(year){
        this.year = year;
    }

    getGenres(){
        return this.genres;
    }

    setGenres(genres){
        this.genres = genres;
    }

    getRuntime(){
        return this.runtime;
    }

    setRuntime(runtime){
        this.runtime = runtime;
    }

    getOverview(){
        return this.overview;
    }

    setOverview(overview){  
        this.overview = overview;
    }

    getReleaseDate(){
        return this.release_date;
    }

    setReleaseDate(release_date){
        this.release_date = release_date;
    }
}