import React from "react";
import PropTypes from "prop-types";
import "./UserCard.scss";

const UserCard = ({ user, userClickhandler }) => {
  return (
    <div
      className='UserCard'
      onClick={() => userClickhandler(user, user.hobbiesIds)}
    >
      <div className='UserCard__avatar'>
        <img src='/images/photo_2019-11-19_12-09-27.jpg' alt='avatar' />
      </div>
      <div className='UserCard__name'>{user.name}</div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape().isRequired,
  userClickhandler: PropTypes.func.isRequired
};

export default UserCard;
