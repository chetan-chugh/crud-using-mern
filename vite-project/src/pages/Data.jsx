import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Data() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const showData = async () => {
    try {
      const response = await axios.get("/api/showData");
      console.log(response);
      setData(response.data);
    } catch (err) {
      setError("Error fetching data");
      setData([]); // Clear data in case of error
    }
  };

  
  const deleteData = async (id) => {
    try {
      let value = confirm("Are you sure you want to delete this data?");
      if (value) {
        const response = await axios.delete(`/api/deleteData/${id}`);
        console.log(response);
        setData((prevData) => prevData.filter((item) => item._id !== id));
      }
    } catch (error) {
      setError("Error deleting data");
      setData([]);
    }
  };

  return (
    <div>
      
      {/* Button to fetch data */}
      <button
        className="text-gray-100 bg-green-700 rounded py-1 text-lg mt-4"
        onClick={showData}
      >
        Show Data
      </button>

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Conditionally render the data */}
      {data && data.length > 0 ? (
        data.map((elem, idx) => (
          <div key={idx}>
            <p className="text-white border border-50 w-3/12 mx-20 mt-5">
              <table className="border border-gray-50 mx-10 my-5">
                <thead>
                  <tr className="border border-gray-50 text-center">
                    <th className="border border-gray-50 px-10">Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-50 text-center">
                    <td>{elem.name}</td>
                    <td className="border border-gray-50 text-center px-3">{elem.email}</td>
                  </tr>
                </tbody>
              </table>
              <button className="text-rose-950 mx-10">
                <Link to={`/update/${elem._id}`}>Edit</Link>
              </button>
              <button
                className="bg-black py-2 px-3 mx-10 rounded-lg"
                onClick={() => deleteData(elem._id)}
              >
                Delete
              </button>
            </p>
          </div>
        ))
      ) : (
        <p className="text-white">No data available</p>
      )}
    </div>
  );
}

export default Data;
