let c1p1 = document.getElementById("c1-p1");
let c1p2 = document.getElementById("c1-p2");
function toggle1() {
  c1p1.classList.toggle("block");
  c1p2.classList.toggle("block");

  c1p1.classList.toggle("hidden");
  c1p2.classList.toggle("hidden");
}

let c2p1 = document.getElementById("c2-p1");
function toggle2() {
  c2p1.classList.toggle("block");
  c2p1.classList.toggle("hidden");
}

let c3p1 = document.getElementById("c3-p1");
let c3p2 = document.getElementById("c3-p2");
function toggle3() {
  c3p1.classList.toggle("block");
  c3p2.classList.toggle("block");
  c3p1.classList.toggle("hidden");
  c3p2.classList.toggle("hidden");
}

let c4p1 = document.getElementById("c4-p1");
function toggle4() {
  c4p1.classList.toggle("block");
  c4p1.classList.toggle("hidden");
}

let c5p1 = document.getElementById("c5-p1");
function toggle5() {
  c5p1.classList.toggle("block");
  c5p1.classList.toggle("hidden");
}

let c6p1 = document.getElementById("c6-p1");
let c6p2 = document.getElementById("c6-p2");
function toggle6() {
  c6p1.classList.toggle("block");
  c6p2.classList.toggle("block");
  c6p1.classList.toggle("hidden");
  c6p2.classList.toggle("hidden");
}

// let squid = document.getElementById("squid")
// let kapil = document.getElementById("kapil")
// let flower = document.getElementById("flower")
// let raid = document.getElementById("raid")
// let aap = document.getElementById("aap")
// let ziam = document.getElementById("ziam")
// let hit = document.getElementById("hit")
// let old = document.getElementById("old")
// let sand = document.getElementById("sand")
// let jaat = document.getElementById("jaat")



let s1 = document.getElementById("slider1")
let btn1 = document.getElementById("button1")
let s2 = document.getElementById("slider2")
let btn2 = document.getElementById("button2")
let sb1 = document.getElementById("slider-button-1")
let sb2 = document.getElementById("slider-button-2")

sb1.addEventListener("click",function(){
  s1.style.display = "none"
  btn1.style.display = "none"
  s2.style.display = "flex"
})

sb2.addEventListener("click",function(){
  s1.style.display = "flex"
  btn1.style.display = "flex"
  btn2.style.display = "flex"
  s2.style.display = "none"
})

// const searchBtn = document.getElementById("searchBtn")
// const APIKEY = '926e096e'
// searchBtn.addEventListener("click",async(e)=>{
//   e.preventDefault();
//   const movieName = document.getElementById("movieInput").value.trim()
//   if(movieName===''){
//     alert("Search cannot be empty")
//     return;
//   }
  
//   try {
//     const response =  await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=926e096e&s=${movieName}`)
//     // const response =  await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${APIKEY}}`)
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     alert("no response")
//   }
    

// });

const searchBtn = document.getElementById("searchBtn")
const APIKEY = '926e096e'

searchBtn.addEventListener("click",async()=>{
    const movieName = document.getElementById("movieInput").value.trim()
    
    if(movieName===''){
        alert("Enter something?")
        return
    }
    
    const response = await fetch(`http://www.omdbapi.com/?apikey=926e096e&s=${movieName}`);
    const data = await response.json();
    console.log(data);
    
    if (data.Response === "True") {
        const movieContainer = document.getElementById("movieContainer")
        movieContainer.innerHTML = data.Search.map((movie) => {
            return `
              <div class="movie-card">
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://m.media-amazon.com/images/'}" alt="Movie Poster">
                <h4>${movie.Title}</h4>
                <p>Year:${movie.Year}</p>
                <p>Type:${movie.Type}</p>
              </div>
    `;
  }).join('');
} else {
  movieContainer.innerHTML = `<p>No results found.</p>`;
}
})  

const userInput = document.getElementById("userInput")
const passwordInput = document.getElementById("passwordInput")

const passwordShow = document.createElement("p").value.trim()
if(passwordInput!=''){
  const p = document.createElement("p")
  p.innerHTML = 
}