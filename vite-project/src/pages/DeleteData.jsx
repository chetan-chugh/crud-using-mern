import React from "react";
import axios from "axios";

function DeleteData() {
  const deleteData = async (id) => {
    try {
      let value = confirm("Are you sure you want to delete this data?");
      if (value) {
        const response = await axios.delete(`/api/deleteData/${id}`);
        console.log(response);
        setData(response.data);
      }
    } catch (error) {
      setError("Error deleting data");
      setData([]);
    }
  };
  return (
    <>
      <h1>Delete</h1>
    </>
  );
}

export default DeleteData;
