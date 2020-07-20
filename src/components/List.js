import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Droppable } from 'react-beautiful-dnd';

import Card from './Card'
import AddActionButton from './AddActionButton'
import colors from '../consts/colors'

export default ({
    title,
    cards,
    listId
}) =>
<Droppable droppableId = {String(listId)}>
    {(provided) => (
        <div {...provided.droppableProps} ref = {provided.innerRef} style = {style.container}>
            <Typography gutterBottom>
                        { title }
            </Typography>
            { cards.map((card, i) => <Card key = {card.id} title = { card.title } id = {card.id} index= {i}/>)}
            <AddActionButton listId={listId}/>
            {provided.placeholder}
        </div>
    )}
</Droppable>

const style = {
    container: {
        backgroundColor: colors.listBg,
        borderRadius: 3,
        width: 300,
        height: '100%',
        padding: 8,
        marginRight: 8
    }
}
