import React from "react";

const AddUser = ({ onClick }) => {
  return (
    <button type="submit" className="add-button" onClick={onClick}>
      Add User
    </button>
  );
};

export default AddUser;
