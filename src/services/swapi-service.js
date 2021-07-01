
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



  //Запрос на поиск по инпуту
  async getMovisSearch(text, page) {
    
    if (text.length > 0) {
      const res = await this.getResourse(`https://api.themoviedb.org/3/search/movie?&api_key=bdd22ead79976a2888bf95992b5b1940&query=${text}&page=${page}`)
      return res.results
    } else {
      return []
    }
  }

}
