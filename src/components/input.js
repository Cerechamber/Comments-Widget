import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.addByClick = this.addByClick.bind(this);
  }

  addByClick() {
    let author = ReactDOM.findDOMNode(this.refs.name_field).value;
    let text = ReactDOM.findDOMNode(this.refs.text_field).value;
    author = author.replace(/<[^>]+>/g,'');
    text = text.replace(/<[^>]+>/g,'');

    const data = new Date().toLocaleString();
    if (author.trim() && text.trim()) {
     const newcomment = {
     author: author, text: text, date: data
     }

    ReactDOM.findDOMNode(this.refs.name_field).value = '';
    ReactDOM.findDOMNode(this.refs.text_field).value = '';
    this.props.commentAdd(newcomment);
    }
    else alert('Введите значение в оба поля');
  }

   
    render(){
      return(
          <div className="add_comment">
      <input className="nick_name" placeholder="Nickname:"
      defaultValue=''        
        ref="name_field"
        />
       <input className="add_text" placeholder="Write smth:"
       defaultValue=''
        ref="text_field"
         />
      <button onClick={this.addByClick}>
        Добавить
        </button>
      </div>

        )  
    }
}



export default Input;

