import React, { useState } from "react";

const UserForm = ({ isFormVisible, addUser, onCancelbtnClick }) => {
  const [nameValue, setName] = useState("");
  const [emailValue, setEmail] = useState("");
  const [descriptionValue, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ nameValue, emailValue, descriptionValue });
    // console.log(emailValue + " " + nameValue + " " + descriptionValue);
    // console.log(e.target.value)

    setName("");
    setEmail("");
    setDescription("");
  };

  const handleWindow = () => {
    onCancelbtnClick();
  };
  return (
    <form
      className="UserForm"
      onSubmit={handleSubmit}
      style={{ display: isFormVisible ? "block" : "none" }}
    >
      <label className="name-label">Name:</label>
      <input
        type="text"
        className="user-input"
        value={nameValue}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="email-label">Email:</label>
      <input
        type="text"
        className="email-input"
        value={emailValue}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="description-label">Description:</label>
      <textarea
        type="textarea"
        className="description-input"
        value={descriptionValue}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit" className="add-button" onClick={handleWindow}>
        Add
      </button>
      <button type="button" className="cancel-button" onClick={handleWindow}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
