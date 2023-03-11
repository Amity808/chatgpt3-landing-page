import React from 'react'
import './article.css'
import {blog01, blog02, blog03, blog04, blog05} from './import';
import Board from '../Board/Board'

const Article = () => {
  return (
    <div className='article__bg__container'>
      <div className='article__words__header'>
        <h1>A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className='dis_play'>
        <div className='board__container_bg'>
          <Board imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='board__container_sm'>
          <Board imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Board imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Board imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Board imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Article
