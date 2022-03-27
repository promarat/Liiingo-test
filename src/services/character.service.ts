import http from "../http-common";
import ICharacterData from "../types/character.type"

class CharacterDataService {
  getAll() {
    return http.get<Array<ICharacterData>>("/character");
  }

  get(id: string) {
    return http.get<ICharacterData>(`/character/${id}`);
  }
}

export default new CharacterDataService();