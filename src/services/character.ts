import api from '../config/api';
import {Character} from '../interfaces/character';
import {PaginatedResponse} from '../interfaces/pagination';

const BASE_PATH = '/character';

export const getCharacters = (page = 1) =>
  api.get<PaginatedResponse<Character[]>>(`${BASE_PATH}?page=${page}`);
  
export const getCharacter = (id: number) =>
  api.get<Character>(`${BASE_PATH}/${id}`);