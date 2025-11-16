import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: {
      english: false,
      maths: false,
      physics: false,
    },
    resume: null,
    url: "",
    choice: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubjectChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      subjects: { ...formData.subjects, [name]: checked },
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Form in React</h2>

      <form onSubmit={handleSubmit}>
        <label>First Name*</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label>Last Name*</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label>Enter Email*</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Contact*</label>
        <input
          type="text"
          name="contact"
          placeholder="Enter Mobile number"
          value={formData.contact}
          onChange={handleChange}
        />

        <label>Gender*</label>
        <div className="inline-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        <label>Your best Subject*</label>
        <div className="inline-group">
          <label>
            <input
              type="checkbox"
              name="english"
              checked={formData.subjects.english}
              onChange={handleSubjectChange}
            />
            English
          </label>

          <label>
            <input
              type="checkbox"
              name="maths"
              checked={formData.subjects.maths}
              onChange={handleSubjectChange}
            />
            Maths
          </label>

          <label>
            <input
              type="checkbox"
              name="physics"
              checked={formData.subjects.physics}
              onChange={handleSubjectChange}
            />
            Physics
          </label>
        </div>

        <label>Upload Resume*</label>
        <input type="file" onChange={handleFileChange} />

        <label>Enter URL*</label>
        <input
          type="url"
          name="url"
          placeholder="Enter url"
          value={formData.url}
          onChange={handleChange}
        />

        <label>Select your choice</label>
        <select
          name="choice"
          value={formData.choice}
          onChange={handleChange}
        >
          <option value="">Select your Ans</option>
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>

        <label>About</label>
        <textarea
          name="about"
          placeholder="About yourself"
          value={formData.about}
          onChange={handleChange}
        />

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
