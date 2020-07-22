import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { Draggable } from 'react-beautiful-dnd';

export default (props) =>
    <Draggable draggableId={String(props.id)} index={props.index}>
        {(provided) => (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <Card style = {styles.cardContainer}>
                    <CardHeader
                        title={props.card.title}
                        subheader={props.card.subTitle}
                    />
                    {
                        (props.card.srcUrl) ? 
                        <CardMedia
                            wide
                            component='img'
                            image={props.card.srcUrl}
                            title={`Imagem de capa da tarefa ${props.card.title}`}
                            className={styles.media}
                        />
                        : <React.Fragment />
                    }
                </Card>
            </div>
        )}
    </Draggable>

const styles = {
    cardContainer: {
        marginBottom: 8,
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
}
