
import React from 'react'
import ReactDOM from 'react-dom'
import Post from './components/Post'
import './App.css'

ReactDOM.render(
  <Post 
    className='post' 
    title={'A Day in the Life of React Development.'} 
    author={'Disgruntled Dev'} 
    body={'COMPONENTS EVERYWHERE!! AHHHHH!!'}
    comments={[
      'Some shaddy internet comment.',
      'A rare comment with actual feedback.'
    ]}
  />,
  document.getElementById('root')
)
