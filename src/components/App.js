import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import List from './List';
import AppBar from './AppBar';
import AddActionButton from './AddActionButton';

function App(props) {
  const { lists } = props;
  return (
    <div className="App">
      <AppBar/>
      <DragDropContext onDragEnd = {onDragEnd}>
        <div style = {styles.listsContainer}>
          { lists.map(list => <List key = {list.id} listId = {list.id} title = {list.title} cards = {list.cards}/>)}
          <AddActionButton list/>
        </div>
      </DragDropContext>
    </div>
  );
}

function onDragEnd() {
  //TODO
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect (mapStateToProps) (App);
