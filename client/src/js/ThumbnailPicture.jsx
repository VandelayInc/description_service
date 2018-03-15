import React from 'react';

const ThumbnailPicture = props => (
  <div name={props.name} className="div-description-user-thumbnail-picture">
    <img className="div-description-user-thumbnail_url" src={props.name && props.name.user_thumbnail_url}></img>
    <div className="div-description-user-first-name">
      {props.name && props.name.user_first_name}
    </div>
  </div>
);

export default ThumbnailPicture;
