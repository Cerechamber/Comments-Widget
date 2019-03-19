import React, { Component } from 'react'
import { connect } from 'react-redux';
import Todocomment from '../components/todocomment';
import Input from '../components/input';
import { commentDelete, commentAdd, setStateFromStorage } from '../actions';



class App extends React.Component {
  constructor(props) {
    super(props);
     const loaded = JSON.parse(localStorage.getItem('resource'));
    if (loaded == null) {
    return;
  }
  else this.props.setStateFromStorage(loaded);
  }

 render() {
  let saves = JSON.stringify(this.props.resource);
    localStorage.setItem('resource', saves);
     let comments = this.props.resource.map((item, i) => {
        return(
          <Todocomment
          key={i}
          author={item.author}
          text={item.text}
          date={item.date}
          commentDelete={this.props.commentDelete}
          />

      )
      });
      return(
        <div>
        {comments}
        <Input commentAdd={this.props.commentAdd} />
         </div>
      )

 }
}


const mapStateToProps = (state) => {
return {
  resource: state
}
}

const mapDispatchToProps = dispatch => {
  return {
    commentDelete: (date) => dispatch(commentDelete(date)),
    commentAdd: (newcomment) => dispatch(commentAdd(newcomment)),
    setStateFromStorage: (loaded) => dispatch(setStateFromStorage(loaded))
  }
}

App = connect(
mapStateToProps,
mapDispatchToProps
)(App);


export default App;