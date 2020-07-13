import { CONSTANTS } from './'

export const addCard = (listId, title) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {
            listId,
            title
        }
    }
}
