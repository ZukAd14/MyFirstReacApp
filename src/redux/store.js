import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';
import shortid from 'shortid';


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = ({ columns }) => columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns
  .filter(column => column.listId === listId);

export const getAllLists = ({ lists }) => lists;

export const getSearchString = ({searchString}) => searchString;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const searchCard = payload => ({ type: 'SEARCH_CARD', payload });

export const addList = payload => ({ type: 'ADD_LIST', payload });

const reducer = (state, action) => {
  
  switch (action.type) {
    case 'ADD_COLUMN': {
      return {...state, columns: [...state.columns, {...action.payload, id: shortid()} ]} ;
    }
    case 'ADD_CARD': {
      return {...state, cards: [...state.cards, {...action.payload, id: shortid()} ]};
    }
    case 'SEARCH_CARD': {
      return {...state, searchString: action.payload };
    }
    case 'ADD_LIST': {
      return {...state, lists: [...state.lists, {...action.payload, id: shortid()}]};
    }
    default: 
    return state;
  }
  
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;