// store.js
import { create } from 'zustand';

const useCharactersStore = create((set) => ({
  characters: [],
  isLoading: true,
  setCharacters: (data) => {
    // Actualizar el estado del store con los productos y marcar isLoading como false
    set({characters: data, isLoading: false})
  },
}));

export default useCharactersStore;