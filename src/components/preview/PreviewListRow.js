import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PreviewListRow = (data) => {
  // console.log('inside row: '+ JSON.stringify(data));
  return (
    <div className="locationContainer">
      <img className="image" src={data.data.imageSrc} alt="weather image"/>
      <div><br/>
        <span>{data.data.locationName}</span><br/>
        <span>{data.data.temperature}</span><br/>
        <span>{data.data.humidity}</span><br/>
        <span>{data.data.discription}</span><br/>
        <span>Wind{data.data.wind}</span><br/>

      </div>
    </div>
  );
};

PreviewListRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default PreviewListRow;
