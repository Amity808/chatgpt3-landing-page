import React from 'react'
import './Board.css'

const Board = ({ imgUrl, date, text }) => {
  return (
    <div className='board__conatainer'>
      <div className='board__img_container'>
        <img src={imgUrl} alt="Board Logo" />
      </div>
      <div className='board_words_container'>
        <div>
            <p>{date}</p>
            <h2>{text}</h2>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Board
