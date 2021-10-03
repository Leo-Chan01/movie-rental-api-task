class MovieRentalApi{
    //in order to achieve this feat, we need: 
    //code to contain all the movies in the rental store.
    //movies have a name, date released, and it should have an attribute to indicate
    //if it is rented or not.
    //we would use name to note and fetch this movie detail from our list

    //list of movies, we would set all properties to false at the first stage
    listOfMovies = [
        {id: 1, name: "Dead Pool", dateReleased: "2018", isRented: false},
        {id: 2, name: "White Witch", dateReleased: "2020", isRented: false},
        {id: 3, name: "End Game", dateReleased: "2019", isRented: false},
        {id: 4, name: "Usain Bolt", dateReleased: "2000", isRented: false},
        {id: 5, name: "White House", dateReleased: "2018", isRented: false},
        {id: 6, name: "Lucifer", dateReleased: "2017", isRented: false},
        {id: 7, name: "James Bond", dateReleased: "2015", isRented: false},
        {id: 8, name: "John Wick", dateReleased: "2010", isRented: false},
        {id: 9, name: "Winter Soldier", dateReleased: "2013", isRented: false},
        {id: 10, name: "Nelson Mandela", dateReleased: "2002", isRented: false},
    ];

    //code to get all the movies available
    getAllMovies(){
        console.log("Amazing Movies Available\n", this.listOfMovies);
        return this.getAllMovies;
    }

    //get Movie by name
    getMovieByName(name){
        const movie = this.listOfMovies.find((movie) => movie.name = name);
        console.log("Movie Result: \n", movie);
        return movie;
    }

    //this is to rent the movie
    rentMovie(name){
        this.listOfMovies.forEach((movie) => {
            if (movie.name !== name) return;
                movie.isRented = true;
        })
    }

    //this is to get the rented movie
    getAllRentedMovies(){
        
    }
}

const listOfMovies = new MovieRentalApi();
// listOfMovies.getAllMovies();
listOfMovies.getMovieByName("Dead Pool");
listOfMovies.rentMovie("Dead Pool");
listOfMovies.getMovieByName("Dead Pool");