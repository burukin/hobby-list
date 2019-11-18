import React, { useState } from "react";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

const AddHobbyForm = ({
  hobbiesNames,
  updateUser,
  getUserHobbies,
  selectedUser
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = e => {
    const { value } = e.target;
    let suggs = [];
    if (value.length > 0) {
      let regex = new RegExp(`^${value}`, "i");
      const names = hobbiesNames.map(hobby => hobby.name);
      suggs = names.sort().filter(name => regex.test(name));
    }
    setSuggestions(suggs);
    setInputValue(value);
  };

  const onSuggestionClick = value => {
    setInputValue(value);
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    if (isEmpty(suggestions)) return null;

    return (
      <ul className='Autocomplete'>
        {suggestions.map(item => (
          <li
            key={item}
            onClick={() => onSuggestionClick(item)}
            className='Autocomplete__item'
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const handleAddHobby = e => {
    e.preventDefault();
    const selectedHobby = hobbiesNames.filter(
      hobby => hobby.name === inputValue
    );
    if (!hobbiesNames.map(i => i.name).includes(inputValue.toLowerCase())) {
      alert(
        "No such hobby in databace. Create new hobby using Create hobby button."
      );
    } else if (selectedUser.hobbiesIds.includes(selectedHobby[0].id)) {
      alert("This hobby is already added.");
    } else {
      const extendedHobbiesIds = [
        ...selectedUser.hobbiesIds,
        selectedHobby[0].id
      ];
      updateUser({ id: selectedUser.id, hobbiesIds: extendedHobbiesIds });
      getUserHobbies(extendedHobbiesIds);
    }
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleAddHobby} className='App__form'>
        <input
          type='text'
          onChange={e => onInputChange(e)}
          value={inputValue}
          className='App__input'
        />
        {renderSuggestions()}
        <button type='submit' className='btn'>
          Add hobby
        </button>
      </form>
    </div>
  );
};

AddHobbyForm.propTypes = {
  hobbiesNames: PropTypes.array.isRequired,
  updateUser: PropTypes.func.isRequired,
  getUserHobbies: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape().isRequired
};

export default AddHobbyForm;
