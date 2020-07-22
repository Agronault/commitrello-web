import { CONSTANTS } from "../actions";


let listId = 2
let cardId = 4
const initialState = [
    {
        id: 0,
        title: 'Lista 0',
        cards: [
            {
                id: 0,
                title: 'Card 0'
            },
            {
                id: 1,
                title: 'Card 1'
            }
        ]
    },
    {
        id: 1,
        title: 'Lista 1',
        cards: [
            {
                id: 2,
                title: 'Tarefa teste de imagem',
                srcUrl: 'https://i.imgur.com/tAdv2HR.png'
            },
            {
                id: 3,
                title: 'Tarefa teste descrição',
                subTitle: 'Isso é uma descrição mais detalhada'
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                id: listId,
                title: action.payload.title,
                cards: []
            }
            listId++
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
            const newCard = {
                id: cardId,
                title: action.payload.title,
            }
            cardId++
            const newState = state.map(list => {
                if (list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            })
            return newState
        default:
            return state;
    }
}

export default listsReducer
