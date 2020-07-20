import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';

export default (props) =>
    <Draggable draggableId={String(props.id)} index={props.index}>
        {(provided) => (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <Card style = {styles.cardContainer}>
                    <CardContent>
                        <Typography gutterBottom>
                            { props.title }
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )}
    </Draggable>

const styles = {
    cardContainer: {
        marginBottom: 8
    }
}
