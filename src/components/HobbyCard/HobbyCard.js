import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import "./HobbyCard.scss";

function HobbyCard({ hobby, handleRemoveHobby }) {
  return (
    <div className='Hobby'>
      <h2 className='Hobby__name'>{hobby.name}</h2>
      <p className='Hobby__description'>{hobby.description}</p>
      <Moment format='DD/MM/YYYY'>{hobby.creationDate}</Moment>
      <img
        src='/images/icons/minus.svg'
        alt='Remove'
        className='Hobby__icon-minus'
        onClick={() => handleRemoveHobby(hobby.id)}
      />
    </div>
  );
}

HobbyCard.propTypes = {
  hobby: PropTypes.shape().isRequired
};

export default HobbyCard;
