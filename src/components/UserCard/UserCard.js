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
        <img src='/images/icons/profile-user.svg' alt='avatar' />
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
