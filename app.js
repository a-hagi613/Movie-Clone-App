//This code is for the main landing page and shows the trending movies for the day

const url =
" https://api.themoviedb.org/3/discover/movie?api_key=0870ad4a8ba8822ee1a9f649978d935a&language=en-US&sort_by=popularity.desc&page=1";
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
          p2.innerHTML = "Release Date: " + element.release_date;
          let p3 = document.createElement("p");
          p3.innerHTML = "Rating: " + element.vote_average;
          let btn1 = document.createElement("button");
          btn1.classList.add("btn1");
          btn1.innerHTML = "Press to watch";
          // Append newly created elements
          div.appendChild(img);
          div.appendChild(h1);
          div.appendChild(p);
          div.appendChild(p2);
          div.appendChild(p3);
          div.appendChild(btn1);
          // cards.innerHTML = "";
          cards.append(div);
        });
      });
  }

  showMovie("");
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
         // console.log(data.results);
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
           p2.innerHTML = "Release Date: " + element.release_date;
           let p3 = document.createElement("p");
           p3.innerHTML = "Rating: " + element.vote_average;
           let btn1 = document.createElement("button");
           btn1.classList.add("btn1");
           btn1.innerHTML = "Press to watch";
           // Append newly created elements
           div.appendChild(img);
           div.appendChild(h1);
           div.appendChild(p);
           div.appendChild(p2);
           div.appendChild(p3);
           div.appendChild(btn1);

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
     console.log(form.movieName.value);
     // innerHTML clears the page so the new search is on top
     cards.innerHTML = "";
     //the searchMovie() function adds the new searched movies
     searchMovie(form.movieName.value);
   });
// function ends