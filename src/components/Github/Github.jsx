import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiResponse = async () => {
      const res = await fetch("https://api.github.com/users/hiteshchoudhary");
      const data = await res.json();
      setData(data);
    };
    apiResponse();
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
    </div>
  );
}

export default Github;
