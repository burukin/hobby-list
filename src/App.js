import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import UserCard from "./components/UserCard/UserCard";
import HobbyCard from "./components/HobbyCard/HobbyCard";
import AddHobbyForm from "./components/AddHobbyForm/AddHobbyForm";
import { getUsers, selectUser, updateUser } from "./actions/users";
import {
  getUserHobbies,
  getHobbiesNames,
  createHobby
} from "./actions/hobbies";
import { Loader } from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import CreateHobbyForm from "./components/CreateHobbyForm/CreateHobbyForm";
import "./App.scss";

const App = ({
  isUserLoading,
  isHobbyLoading,
  users,
  userHobbies,
  getUsers,
  getUserHobbies,
  selectUser,
  formValues,
  getHobbiesNames,
  hobbiesNames,
  createHobby,
  selectedUser,
  updateUser
}) => {
  useEffect(() => {
    getUsers();
    getHobbiesNames();
  }, [getHobbiesNames, getUsers]);

  const [modal, setShowModal] = useState(false);

  const showModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const userClickhandler = (user, userHobbiesIds) => {
    getUserHobbies(userHobbiesIds);
    selectUser(user);
  };

  let renderUsers = null;
  if (isUserLoading) {
    renderUsers = <Loader />;
  } else {
    renderUsers =
      !isEmpty(users) &&
      users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          userClickhandler={userClickhandler}
        />
      ));
  }

  const handleRemoveHobby = hobbyId => {
    const filteredHobbiesIds = selectedUser.hobbiesIds.filter(
      id => id !== hobbyId
    );
    updateUser({ id: selectedUser.id, hobbiesIds: filteredHobbiesIds });
    getUserHobbies(filteredHobbiesIds);
  };

  let renderHobbies = null;
  if (isHobbyLoading) {
    renderHobbies = <Loader />;
  } else if (!isEmpty(selectedUser)) {
    renderHobbies = !isEmpty(userHobbies) ? (
      userHobbies.map(hobby => (
        <HobbyCard
          key={hobby.id}
          hobby={hobby}
          handleRemoveHobby={handleRemoveHobby}
        />
      ))
    ) : (
      <h2>This user doesn't have added hobbies.</h2>
    );
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (
      !hobbiesNames
        .map(i => i.name)
        .includes(formValues.values.hobbyName.toLowerCase())
    ) {
      const formData = {
        name: formValues.values.hobbyName,
        description: formValues.values.description,
        creationDate: Date.now()
      };
      createHobby(formData);
    } else {
      alert("This hobby already exists in database");
    }
  };

  return (
    <React.Fragment>
      <header className='header'>
        <h1 className='header__title'>HOBBIES</h1>
      </header>
      <Modal show={modal} handleClose={hideModal}>
        <CreateHobbyForm
          handleSubmit={handleSubmit}
          hobbiesNames={hobbiesNames}
        />
      </Modal>
      <button onClick={showModal} className='btn btn--create'>
        Create hobby
      </button>
      <section className='App__body'>
        <div className='row'>
          <div className='App__user-column'>{renderUsers}</div>
          <div className='App__hobby-column'>
            <div className='App__hobby-list'>{renderHobbies}</div>
            {!isEmpty(selectedUser) ? (
              <AddHobbyForm
                hobbiesNames={hobbiesNames}
                updateUser={updateUser}
                getUserHobbies={getUserHobbies}
                selectedUser={selectedUser}
              />
            ) : (
              <h2 className='App__selection'>Please, select a user!</h2>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isUserLoading: state.users.loading,
  isHobbyLoading: state.hobbies.loading,
  users: state.users.users,
  selectedUser: state.users.selectedUser,
  userHobbies: state.hobbies.hobbies,
  formValues: state.form.CreateHobbyForm,
  hobbiesNames: state.hobbies.hobbiesNames
});

App.propTypes = {
  isUserLoading: PropTypes.bool.isRequired,
  isHobbyLoading: PropTypes.bool,
  users: PropTypes.array.isRequired,
  userHobbies: PropTypes.array,
  getUsers: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
  formValues: PropTypes.shape()
};

export default connect(mapStateToProps, {
  getUsers,
  updateUser,
  getUserHobbies,
  getHobbiesNames,
  createHobby,
  selectUser
})(App);
