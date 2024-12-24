import React from "react";
import { Link } from "react-router-dom";

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
    }
  };

  return (
    <>
      <div>
        <Routes>
          <Route path="/data" element={<Data />} />
        </Routes>

        <button
          className="text-gray-100 bg-green-700 rounded py-1 text-lg mt-4"
          onClick={showData}
        >
          Show Data
        </button>

        {/* Conditionally render the data */}
        {data && data.length > 0 ? (
          data.map((elem, idx) => (
            <div key={idx}>
              <p>Name: {elem.name}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}

export default Data;
