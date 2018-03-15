import React from 'react';
import ThumbnailPicture from './ThumbnailPicture.jsx';

const Header = (props) => (
  <div className="div-description-header">
    <div className="div-description-property-type">{props.desc && (props.desc.room_type_category === 'entire_home' ? (props.desc.property_type && ('Entire ' + props.desc.property_type).toUpperCase()) : (props.desc.property_type && props.desc.property_type.toUpperCase()))}</div>
    <div className="div-description-title-user">
      <div className="div-description-title">
        <div className="div-description-name">{props.desc && props.desc.name}</div>
        <div className="div-description-city">{props.desc && props.desc.city}</div>
      </div>
      <div className="div-description-thumbnail-pic">
        <ThumbnailPicture name={props.desc} user={props.desc && props.desc.user && props.desc.user.user}></ThumbnailPicture>
      </div>
    </div>
    <div className="div-description-characteristics-block">
      <div className="div-description-characteristics-item">
        <div className="div-description-characteristics-table-cell">
          <i className="fas fa-users"></i>
        </div>
        <div className="div-description-characteristics-table-cell">
          <div className="div-description-guests">{props.desc && (props.desc.person_capacity === 0 ? 'No Space Currently' : props.desc.person_capacity === 1 ? '1 Person' : `${props.desc.person_capacity} People`)}</div>
        </div>
      </div>
    </div>
    <div className="div-description-characteristics-block">
      <div className="div-description-characteristics-item">
        <div className="div-description-characteristics-table-cell">
          <i className="fas fa-home"></i>
        </div>
        <div className="div-description-characteristics-table-cell">
          <div className="div-description-bedrooms">{props.desc && (props.desc.bedrooms === 0 ? 'Studio' : props.desc.bedrooms === 1 ? '1 Bedroom' : `${props.desc.bedrooms} Bedrooms`)}</div>
        </div>
      </div>
    </div>
    <div className="div-description-characteristics-block">
      <div className="div-description-characteristics-item">
        <div className="div-description-characteristics-table-cell">
          <i className="fas fa-bed"></i>
        </div>
        <div className="div-description-characteristics-table-cell">
          <div className="div-description-beds">{props.desc &&  (props.desc.beds === 1 ? '1 bed' : `${props.desc.beds} beds`)}</div>
        </div>
      </div>
    </div>
    <div className="div-description-characteristics-block">
      <div className="div-description-characteristics-item">
        <div className="div-description-characteristics-table-cell">
          <i className="fas fa-bath"></i>
        </div>
        <div className="div-description-characteristics-table-cell">
          <div className="div-description-bathrooms">{props.desc && (props.desc.bathrooms === 1 ? '1 bath' : `${props.desc.bathrooms} bathrooms`)}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
