export default class SwapiService {
  async getToken() {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=bdd22ead79976a2888bf95992b5b1940"
    );

    if (!res.ok) {
      throw new Error("Ошибка с сервера");
    }
    const body = await res.json();
    return body;
  }

  async postRate(rate, id, token) {
    if (rate > 0) {
      let givenGrade = {
        value: rate,
      };

      let url = `https://api.themoviedb.org/3/movie/${id}/rating?api_key=bdd22ead79976a2888bf95992b5b1940&guest_session_id=${token}`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(givenGrade),
      });
      if (!res.ok) {
        throw new Error("Ошибка с сервера");
      }
      // let result = await res.json();
      // console.log(result);
    }
  }

  async getResourse(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Ошибка с сервера");
    }
    const body = await res.json();
    return body;
  }

  async getMovisSearch(text, page) {
    let url = `https://api.themoviedb.org/3/search/movie?&api_key=bdd22ead79976a2888bf95992b5b1940&query=${text}&page=${page}`;

    if (text.length > 0) {
      const res = await this.getResourse(url);
      return {
        data: res.results,
        total_pages: res.total_pages,
      };
    }
    return [];
  }

  async getGenres() {
    const res = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=bdd22ead79976a2888bf95992b5b1940&language=en-US&id=53"
    );
    const body = await res.json();

    if (!res.ok) {
      throw new Error("Ошибка с сервера");
    }
    return body;
  }
}
