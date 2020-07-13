import React from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import { addList, addCard } from '../actions'

class AddActionButton extends React.Component {
    
    state = {
        text: '',
        formOpen: false,
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = (e) => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addList(text));
            this.setState({ text: '' });
        }
    }

    handleAddCard = () => {
        const { dispatch, listId } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addCard(listId, text));
            this.setState({ text: '' });
        }
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? texts.addListText : texts.addCardText;
        const buttonStyle = list? styles.newList : styles.newCard;
    
        return(
            <div style = {buttonStyle} onClick = {this.openForm}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? texts.listPlaceholder : texts.cardPlaceholder;
        const buttonTitle = list ? texts.addListText : texts.addCardText

        return <div>
            <Card style = {{
                overflow: 'visible',
                minHeight: 80,
                minWidth: 272,
                padding: '6px 8px 2px'
            }}>
                <TextareaAutosize
                    placeholder = {placeholder}
                    autoFocus
                    onBlur = {this.closeForm}
                    value = {this.state.text}
                    onChange = {this.handleInputChange}
                    style = {{
                        resize: 'none',
                        outline: 'none',
                        border: 'none',
                        overflow: 'hidden',
                        width: '100%',
                    }}
                />
            </Card>
            <div style = {groupSimpleStyle}>
                <Button variant='contained'
                onMouseDown = {list ? this.handleAddList : this.handleAddCard}
                style = {{
                    color: 'white',
                    backgroundColor: '#5aac44'
                }}>
                    {buttonTitle}
                </Button>
                <Icon style = {{
                    marginLeft: 8,
                    cursor: 'pointer',
                }}>
                    close
                </Icon>
            </div>
        </div>
    }

    render () {
        return this.state.formOpen? this.renderForm() : this.renderAddButton();
    }
}

const texts = {
    addListText: 'Adicionar lista',
    addCardText: 'Adicionar tarefa',
    listPlaceholder: 'Nova lista',
    cardPlaceholder: 'Nova tarefa'
}

const openGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
}

const groupSimpleStyle = {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center'
}

const styles = {
    newList: {
        ...openGroupStyle,
        opacity: 1,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, .15)'
    },
    newCard: {
        ...openGroupStyle,
        opacity: 0.5,
        color: 'inherit',
        backgroundColor: 'inherit'
    }
}

export default connect() (AddActionButton);
