class MovieRentalApi{
    //in order to achieve this feat, we need: 
    //code to contain all the movies in the rental store.
    //movies have a name, date released, and it should have an attribute to indicate
    //if it is rented or not.
    //we would use name to note and fetch this movie detail from our list

    //list of movies, we would set all properties to false at the first stage
    listOfMovies = [
        {name: "Dead Pool", dateReleased: "2018", isRented: false},
        {name: "White Witch", dateReleased: "2020", isRented: false},
        {name: "End Game", dateReleased: "2019", isRented: false},
        {name: "Usain Bolt", dateReleased: "2000", isRented: false},
        {name: "White House", dateReleased: "2018", isRented: false},
        {name: "Lucifer", dateReleased: "2017", isRented: false},
        {name: "James Bond", dateReleased: "2015", isRented: false},
        {name: "John Wick", dateReleased: "2010", isRented: false},
        {name: "Winter Soldier", dateReleased: "2013", isRented: false},
        {name: "Nelson Mandela", dateReleased: "2002", isRented: false},
    ];

    //code to get all the movies available
    getAllMovies(){
        console.log("Amazing Movies Available\n", this.listOfMovies);
        return this.getAllMovies;
    }

    //get Movie by name
    getMovieByName(name){
        const movie = this.listOfMovies.find((movie) => movie.name = name);
        console.log("Single Movie Search Result: \n", movie);
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
        const allRentedMovies = this.listOfMovies.filter((movie) => movie.isRented === true);
        if (allRentedMovies.length === 0) {
            return console.log("No Movies have been rented out");
        }

        console.log("Results of Rented out Movies: \n", allRentedMovies);
        return allRentedMovies;
    }

    //the API user can also add movies using this FN the default status logically is false
    addNewMovies(name, dateReleased){
        if (name == undefined) return console.log("No name provided\n");
        const newMovie = {name, dateReleased, isRented: false};
        this.listOfMovies.push(newMovie);
    }
}


//here we test and access all our api functions as a programmer with the api integration would
let movieName = "Dead Pool";
const listOfMovies = new MovieRentalApi();
listOfMovies.getAllMovies();
listOfMovies.getMovieByName(movieName);
listOfMovies.rentMovie(movieName);
listOfMovies.getAllRentedMovies();
listOfMovies.addNewMovies("Queen Elizabeth", "2010");
//to check desired result
listOfMovies.getAllMovies();
