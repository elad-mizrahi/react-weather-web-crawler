import React from 'react';
import PreviewListRow from './PreviewListRow';

const PreviewPage = (data) => {
  if(data.data.length === 0){
    return<div></div>;
  }
  else{
    let weatherDetails = JSON.parse(JSON.stringify(data.data));
    return(
      <div >
        {weatherDetails.map((item, index) => <PreviewListRow key={index} data={item}/>)}
      </div>
    );
  }
};

export default PreviewPage;
