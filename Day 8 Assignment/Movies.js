class Movie {
    constructor(title,studio,rating="PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
      }
      getPG(mov){

    var m = mov;
    var arr = []
    for(var len in m){
        var object = m[len]
        if(object.rating=="PG"){
            arr.push(object);
        }
    }
    console.log(arr);

}
}

const movie1 = new Movie("Casino Royale","Eon Productions","PG13");
const movie2 = new Movie("Spider Man","Marvel","PG");
const movie3 = new Movie("Batman","DC","PG");
const movie4 = new Movie("Wonder woman","DC","R")
const movies = [movie1,movie2,movie3,movie4];

movie1.getPG(movies);



