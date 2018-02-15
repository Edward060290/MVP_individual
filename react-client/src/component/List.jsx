import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4>List Component</h4>
    there are {props.items.length} movies
    {props.items.map(item => <ListItem item={item}></ListItem>)}

  </div>
)

export default List;
