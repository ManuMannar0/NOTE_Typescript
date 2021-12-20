enum PornGenres { UNKNOWN, MILF, BLONDE, HENTAI, THREESOME }
const PornVideos = [
  {
    genres : PornGenres.MILF,
    users: "EXPERTS"
  },
  {
    genres : PornGenres.BLONDE,
    users: "ROOKIES"
  },
  {
    genres : PornGenres.HENTAI,
    users: "ARTISTS"
  }
]
const numberOfVideos = () => {
  let numberOfTypes = 0
  for (numberOfTypes; numberOfTypes <= PornVideos.length-1; numberOfTypes++) {}
  return numberOfTypes
}
const randomNumber = (numberOfTypes:number) => {
  return Math.round((Math.random() * numberOfTypes))
}
const PORNVIDEOS = (random : number) => {
  if(random == 0){
    alert("NO PORN VIDEOS.. I'm so sorry"); 
  }else{
    const actress = PornVideos[random-1]
    alert("The genre is " + PornGenres[actress.genres] + " and is for " + actress.users);
  }
}

const xxx = 3

PORNVIDEOS(randomNumber(numberOfVideos()))