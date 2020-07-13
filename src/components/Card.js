import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default (props) =>
    <Card style = {styles.cardContainer}>
        <CardContent>
            <Typography gutterBottom>
                { props.title }
            </Typography>
        </CardContent>
    </Card>

const styles = {
    cardContainer: {
        marginBottom: 8
    }
}
