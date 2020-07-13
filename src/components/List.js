import React from 'react';
import Typography from '@material-ui/core/Typography';

import Card from './Card'
import AddActionButton from './AddActionButton'
import colors from '../consts/colors'

export default ({
    title,
    cards,
    listId
}) =>
<div style = {style.container}>
    <Typography gutterBottom>
                { title }
    </Typography>
    { cards.map(card => <Card key = {card.id} title = { card.title }/>)}
    <AddActionButton listId={listId}/>
</div>

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
