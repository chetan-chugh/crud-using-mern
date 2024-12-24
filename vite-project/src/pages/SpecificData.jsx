import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function SpecificData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { _id } = useParams();

  // Fetch data when the component mounts or _id changes
  useEffect(() => {
    const specificData = async () => {
      try {
        const response = await axios.get(`/api/showData/${_id}`);
        console.log(response)
        setData(response.data);
      } catch (err) {
        setError("Error fetching data");
        setData([]);  // Clear data in case of error
      }
    };

    specificData();
  }, [_id]);  // Dependency array ensures fetch is triggered on _id change

  // Delete function
  const deleteData = async (id) => {
    try {
      await axios.delete(`/api/showData/${id}`);
      // Remove the deleted item from the data list
      setData(data.filter(item => item._id !== id));  
    } catch (err) {
      setError("Error deleting data");
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}

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
                <Link to="/edit">Edit</Link>
              </button>
              <button className="bg-black py-2 px-3 mx-10 rounded-lg">
                <Link to={`/data/${elem._id}`}>Details</Link> {/* Use dynamic URL */}
              </button>
              <button className="bg-black py-2 px-3 mx-10 rounded-lg" onClick={() => deleteData(elem._id)}>Delete</button>
            </p>
          </div>
        ))
      ) : (
        <p className="text-white">No data available</p>
      )}
    </div>
  );
}

export default SpecificData;
