import React from 'react';
import "../Styles/ContentWrapper.scss"

function ContentWrapper(props) {
  return (
    <div className='content'>{props.children}</div>
  )
}

export default ContentWrapper