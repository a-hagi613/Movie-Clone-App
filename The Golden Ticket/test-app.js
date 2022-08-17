
//This code is for the main page and shows the popular movies for the day

const url = 
" https://api.themoviedb.org/3/discover/movie?api_key=0870ad4a8ba8822ee1a9f649978d935a&language=en-US&sort_by=popularity.desc&page=1";
// "http://api.themoviedb.org/3/discover/movie?api_key=0870ad4a8ba8822ee1a9f649978d935a&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000"

function showMovie() {
    fetch(url)
      .then(res => {
        console.log("Response success");
        // console.log(res);
        return res.json();
      })
      .then(data => {
        console.log("We got the data");
        console.log(data);

        data.results.forEach(element => {
          console.log(
            element.original_title +
              ` https://image.tmdb.org/t/p/original/${element.poster_path}`
          );

          let cards = document.getElementById("cards");
          let div = document.createElement("div");
          div.classList.add("card");
          let img = document.createElement("img");
          img.src =
            "https://image.tmdb.org/t/p/original/" + element.poster_path;
          let h1 = document.createElement("h1");
          h1.innerHTML = element.title;
          let p = document.createElement("p");
          p.innerHTML = element.overview;
          let p2 = document.createElement("p");
          p2.classList.add("p2")
          p2.innerHTML =  element.release_date.slice(0,4);
          p2.style.fontSize = "12px";
          let p3 = document.createElement("p")
          p3.classList.add("p3")
          p3.innerHTML =  element.vote_average;
          p3.style.fontSize = "12px";
          
          

         if (element.vote_average >= 8 ) {
            p3.style.color = "#00b894"
          }
          else if (element.vote_average >= 5) {
            p3.style.color= "#fdcb6e"
          }
          else {
            p3.style.color= "#d63031" 
          }
          let btn1 = document.createElement("button");
          btn1.classList.add("btn1");
          btn1.innerHTML = " Watch Movie";
          // Append newly created elements
          div.appendChild(img);
          div.appendChild(h1);
          div.appendChild(p);
          div.appendChild(p2);
          p2.appendChild(p3);
          div.appendChild(btn1);
          // cards.innerHTML = "";
          cards.append(div);
        });
      });
  }
//This shows the most popular movies when the page loads
showMovie()
//
// //The home function above will call and take you back to the home page once you press the home button
// const home = document.getElementsByClassName("horizontal-li");
// trending.addEventListener("click", function (e) {
//   console.log(e.target.id);

//   if (e.target.id === "home") {
//       cards.innerHTML = ""
//       showMovie("")
//   }
// })

//This code is for the trending page and shows the highest rated movies of all time

function trendingMovie() {
    
const url = 
"http://api.themoviedb.org/3/discover/movie?api_key=0870ad4a8ba8822ee1a9f649978d935a&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000"

// https://api.themoviedb.org/3/movie/top_rated?api_key=0870ad4a8ba8822ee1a9f649978d935a&language=en-US&page=1
    fetch(url)
      .then(res => {
        console.log("Response success");
        // console.log(res);
        return res.json();
      })
      .then(data => {
        console.log("We got the data");
        console.log(data);

        data.results.forEach(element => {
          console.log(
            element.original_title +
              ` https://image.tmdb.org/t/p/original/${element.poster_path}`
          );

          let cards = document.getElementById("cards");
          let div = document.createElement("div");
          div.classList.add("card");
          let img = document.createElement("img");
          img.src =
            "https://image.tmdb.org/t/p/original/" + element.poster_path;
          let h1 = document.createElement("h1");
          h1.innerHTML = element.title;
          let p = document.createElement("p");
          p.innerHTML = element.overview;
          let p2 = document.createElement("p");
          p2.classList.add("p2")
          p2.innerHTML =  element.release_date.slice(0,4);
          p2.style.fontSize = "12px";
          let p3 = document.createElement("p")
          p3.classList.add("p3")
          p3.innerHTML =  element.vote_average;
          p3.style.fontSize = "12px";
          
          

         if (element.vote_average >= 8 ) {
            p3.style.color = "#00b894"
          }
          else if (element.vote_average >= 5) {
            p3.style.color= "#fdcb6e"
          }
          else {
            p3.style.color= "#d63031" 
          }
          let btn1 = document.createElement("button");
          btn1.classList.add("btn1");
          btn1.innerHTML = " Watch Movie";
          // Append newly created elements
          div.appendChild(img);
          div.appendChild(h1);
          div.appendChild(p);
          div.appendChild(p2);
          p2.appendChild(p3);
          div.appendChild(btn1);
          // cards.innerHTML = "";
          cards.append(div);
        });
      });
  }
  //The trending function above will call once you press the trending button
  const trending = document.querySelector(".horizontalNavItems");
  trending.addEventListener("click", function (e) {
    console.log(e.target.id);

    if (e.target.id === "trending") {
        cards.innerHTML = ""
        trendingMovie("")
    }
})
//The home function above will call and take you back to the home page once you press the home button
const home = document.getElementsByClassName("horizontal-li");
trending.addEventListener("click", function (e) {
  console.log(e.target.id);

  if (e.target.id === "home") {
      cards.innerHTML = ""
      showMovie("")
  }
})

//   showMovie("");
  //function ends//

   //This code below shows the movies i search onto the console
   const apiKey = "api_key=0870ad4a8ba8822ee1a9f649978d935a";
   const baseUrl = "https://api.themoviedb.org/3/search/movie?";

   function searchMovie(nameOfMovie) {
     const query = baseUrl + apiKey + `&query=${nameOfMovie}`;
     fetch(query)
       .then(res => {
         console.log("Response success");
         // console.log(res);
         return res.json();
       })
       .then(data => {
        console.log("We got the data");
        console.log(data);

        data.results.forEach(element => {
          console.log(
            element.original_title +
              ` https://image.tmdb.org/t/p/original/${element.poster_path}`
          );

          let cards = document.getElementById("cards");
          let div = document.createElement("div");
          div.classList.add("card");
          let img = document.createElement("img");
          img.src =
            "https://image.tmdb.org/t/p/original/" + element.poster_path;
          let h1 = document.createElement("h1");
          h1.innerHTML = element.title;
          let p = document.createElement("p");
          p.innerHTML = element.overview;
          let p2 = document.createElement("p");
          p2.classList.add("p2")
          p2.innerHTML =  element.release_date.slice(0,4);
          p2.style.fontSize = "12px";
          let p3 = document.createElement("p")
          p3.classList.add("p3")
          p3.innerHTML =  element.vote_average;
          p3.style.fontSize = "12px";
          
          

         if (element.vote_average >= 8 ) {
            p3.style.color = "#00b894"
          }
          else if (element.vote_average >= 5) {
            p3.style.color= "#fdcb6e"
          }
          else {
            p3.style.color= "#d63031" 
          }
          let btn1 = document.createElement("button");
          btn1.classList.add("btn1");
          btn1.innerHTML = " Watch Movie";
          // Append newly created elements
          div.appendChild(img);
          div.appendChild(h1);
          div.appendChild(p);
          div.appendChild(p2);
          p2.appendChild(p3);
          div.appendChild(btn1);
          // cards.innerHTML = "";
          cards.append(div);
        });
      });
   }
   searchMovie("");

//This code takes the input from the search bar and logs it onto the console
   // const search = document.getElementById("searchBox");
   const form = document.querySelector(".form");
   form.addEventListener("submit", function (e) {
     //e.preventDefault stops the page from refreshing
     e.preventDefault();
     console.log("movie name under here");
     //went inside the form and got the input name (movieName) and then got its value
     console.log(form.movieName.value);
     // innerHTML clears the page so the new search is on top
     cards.innerHTML = "";
     //the searchMovie() function adds the new searched movies
     searchMovie(form.movieName.value);
   });
// function ends

//This function fetches movies based on their genre//
function movieGenre(id) {
    const genre = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&sort_by=vote_average.desc&vote_count.gte=1000&language=en-US&api_key=0870ad4a8ba8822ee1a9f649978d935a`;
    fetch(genre)
      .then(res => {
        console.log("action movie success");
        // console.log(res);
        return res.json();
      })
      .then(data => {
        console.log("We got the data");
        console.log(data);

        data.results.forEach(element => {
          console.log(
            element.original_title +
              ` https://image.tmdb.org/t/p/original/${element.poster_path}`
          );

          let cards = document.getElementById("cards");
          let div = document.createElement("div");
          div.classList.add("card");
          let img = document.createElement("img");
          img.src =
            "https://image.tmdb.org/t/p/original/" + element.poster_path;
          let h1 = document.createElement("h1");
          h1.innerHTML = element.title;
          let p = document.createElement("p");
          p.innerHTML = element.overview;
          let p2 = document.createElement("p");
          p2.classList.add("p2")
          p2.innerHTML =  element.release_date.slice(0,4);
          p2.style.fontSize = "12px";
          let p3 = document.createElement("p")
          p3.classList.add("p3")
          p3.innerHTML =  element.vote_average;
          p3.style.fontSize = "12px";
          
          

         if (element.vote_average >= 8 ) {
            p3.style.color = "#00b894"
          }
          else if (element.vote_average >= 5) {
            p3.style.color= "#fdcb6e"
          }
          else {
            p3.style.color= "#d63031" 
          }
          let btn1 = document.createElement("button");
          btn1.classList.add("btn1");
          btn1.innerHTML = " Watch Movie";
          // Append newly created elements
          div.appendChild(img);
          div.appendChild(h1);
          div.appendChild(p);
          div.appendChild(p2);
          p2.appendChild(p3);
          div.appendChild(btn1);
          // cards.innerHTML = "";
          cards.append(div);
        });
      });
  }

  const nav = document.querySelector(".nav");
  nav.addEventListener("click", function (e) {
    console.log(e.target.id);

    if (e.target.id === "action") {
        cards.innerHTML = ""
        movieGenre(28)
    }
    else if (e.target.id === "adventure") {
        cards.innerHTML = ""
        movieGenre(12)
    }
    else if (e.target.id === "animation") {
        cards.innerHTML = ""
        movieGenre(16)
    }
    else if (e.target.id === "comedy") {
        cards.innerHTML = ""
        movieGenre(35)
    }
    else if (e.target.id === "crime") {
        cards.innerHTML = ""
        movieGenre(80)
    }
    else if (e.target.id === "documentary") {
        cards.innerHTML = ""
        movieGenre(99)
    }
    else if (e.target.id === "drama") {
        cards.innerHTML = ""
        movieGenre(18)
    }
    else if (e.target.id === "family") {
        cards.innerHTML = ""
        movieGenre(10751)
    }
    else if (e.target.id === "fantasy") {
        cards.innerHTML = ""
        movieGenre(14)
    }
    else if (e.target.id === "history") {
        cards.innerHTML = ""
        movieGenre(36)
    }
    else if (e.target.id === "horror") {
        cards.innerHTML = ""
        movieGenre(27)
    }
    else if (e.target.id === "music") {
        cards.innerHTML = ""
        movieGenre(10402)
    }
    else if (e.target.id === "horror") {
        cards.innerHTML = ""
        movieGenre(27)
    }
    else if (e.target.id === "mystery") {
        cards.innerHTML = ""
        movieGenre(9648)
    }
    else if (e.target.id === "romance") {
        cards.innerHTML = ""
        movieGenre(10749)
    }
    else if (e.target.id === "thriller") {
        cards.innerHTML = ""
        movieGenre(53)
    }
    else if (e.target.id === "war") {
        cards.innerHTML = ""
        movieGenre(10752)
    }
    else if (e.target.id === "western") {
        cards.innerHTML = ""
        movieGenre(37)
    }
    else {
        console.log('Error, something went wrong!');
    }
  });
  // movieGenre(16)
// 

//dark/light mode function 
function toggleDarkLight() {
  let body = document.getElementById("body");
  let currentClass = body.className;
  body.className =
    currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
//MOVIE ID's
// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37
// 