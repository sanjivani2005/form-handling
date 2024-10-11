import React, { useState } from 'react';  // Import useState

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [submittedData, setSubmittedData] = useState(null);  // State to store submitted data

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,  // Dynamically update the field based on input name
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submit
    console.log('Form submitted:', formData);  // You can handle form submission here
    setSubmittedData(formData);  // Set submitted data to state
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}  // Use formData to bind value
            onChange={handleChange}  // Update state on change
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"  // Correct input type
            name="email"
            value={formData.email}  // Use formData to bind value
            onChange={handleChange}  // Update state on change
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}  // Use formData to bind value
            onChange={handleChange}  // Update state on change
          />
        </div>
        <button type="submit">Submit</button>
        <button type="reset" onClick={() => setFormData({ name: '', email: '', age: '' })}>Reset</button> {/* Clear form on reset */}
      </form>

      {
        submittedData && (
          <>
            <h2> Submitted Data:</h2>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Age: {submittedData.age}</p>
          </>
        )
      }
    </div>
  );
};

export default UserForm;
