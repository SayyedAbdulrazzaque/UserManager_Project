import React, {useState, useEffect} from 'react'

export const EditUser = ({isFormVisible, user , onUpdate ,onCancel}) => {
    const [nameValue, setName] = useState("");
    const [emailValue, setEmail] = useState("");
    const [descriptionValue, setDescription] = useState("");
  
    useEffect(() => {
      setName(user.nameValue || "");
      setEmail(user.emailValue || "");
      setDescription(user.descriptionValue || "");
    }, [user]);

    const handleWindow = () => {
      onCancel();
    };

    const handleUpdate = (e) => {
      e.preventDefault();
      onUpdate(user.id, {nameValue, emailValue, descriptionValue});
      onCancel();
    }; 
    return (
      <form
        className="UserForm"
        onSubmit={handleUpdate}
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
        <button type="submit" className="update-button" onClick={handleWindow}>
          Update
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    );
  };
