import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate(); // For navigation after update
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (update user data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/updateData/${id}`, user);
      console.log(response);
      // Navigate back to the Data page or show a success message
      navigate("/data");
    } catch (err) {
      setError("Error updating data");
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-white">Update User Data</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-white">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="px-4 py-2 mt-2 rounded"
          />
        </div>

        <div>
          <label className="text-white">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="px-4 py-2 mt-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
