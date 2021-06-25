
const POPULAR_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bdd22ead79976a2888bf95992b5b1940&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=bdd22ead79976a2888bf95992b5b1940&query=";

export default class SwapiService {

  //общий запрос к API
  async getResourse(url) {
    const res = await fetch(url)
    //ошибка ответа сервера
    if (!res.ok){ 
      throw new Error('Ошибка с сервера')
    }
    const body = await res.json()
    return body
  } 

  //Запрос на популярные видео
  async getMovisPopular() {
    const res = await this.getResourse(POPULAR_API)
    return res.results
  }

  //Запрос на поиск по инпуту
  async getMovisSearch(text) {
    const res = await this.getResourse(SEARCH_API+text)
    return res.results
    // console.log(text)
  }
}


// const swapi = new SwapiService()
// swapi.getMovisSearch("lion").then((data) => {
//   data.forEach((movie) => {
//     console.log(movie.title)
//   })
// })