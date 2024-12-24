import React from "react";
import axios from "axios";

function DeleteData() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   const showData = async () => {
//     try {
//       const response = await axios.get("/api/deleteData");
//       console.log(response); // Optionally log for debugging
//       setData(response.data); // Assuming the response contains the data
//     } catch (err) {
//       setError("Error fetching data");
//       setData([]); // Clear data in case of error
//     }
//   };
  return (
    <>
      {/* <button
        className="text-gray-100 bg-green-700 rounded py-1 text-lg mt-4"
        onClick={showData}
      >
        Show Data
      </button>
      <div>
    
        {data && data.length > 0 ? (
          data.map((elem, idx) => (
            <div key={idx}>
              <p className="text-white border border-50 w-3/12 text-center mx-20 mt-5">
                <table className="border border-gray-50 mx-10 my-5">
                  <tr className="border border-gray-50">
                    <th className="border border-gray-50">Name</th>
                    <th>Email</th>
                  </tr>
                  <tr>
                    <td>{elem.name}</td>
                    <td>{elem.email}</td>
                  </tr>
                </table>
              </p>
            </div>
          ))
        ) : (
          <p className="text-white">No records found</p>
        )}
      </div> */}
      <h1>Delete</h1>
    </>
  );
}

export default DeleteData;
