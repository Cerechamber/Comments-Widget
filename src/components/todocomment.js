import React from "react";


const Todocomment = (props) => {
  const { commentDelete, author, text, date } = props;
     return(
      <div className="comment">
        <img src="https://cdn.onlinewebfonts.com/svg/img_527860.png" onClick={ev => commentDelete(date)} />
      <p className="nick">{author}</p>
      <p>{text}</p>
      <p className="time">{date}</p>
      </div>
    )
}


export default Todocomment;