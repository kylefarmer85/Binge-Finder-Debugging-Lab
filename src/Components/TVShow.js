import React from 'react';

const TVShow = (props) => {

  return (
    
    <div>
      <br/>
      <img src={props.image.medium} onClick={() => props.selectShow(props.show)} alt=""/>
    </div>
  );
}

export default TVShow;
