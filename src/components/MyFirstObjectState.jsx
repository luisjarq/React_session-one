import { useState } from "react";

export const MyFirstObjectState = () => {
  const [avenger, setavenger] = useState({
    name: "Thor",
    lastName: "Odinson",
  });
  return (
    <>
      <h4>
        {avenger.name} | {avenger.lastName}
      </h4>
      <input
        type="text"
        value={avenger.name}
        onChange={(e) => setavenger({ ...avenger, name: e.target.value })}
      />
      <input
        type="text"
        value={avenger.lastName}
        onChange={(e) => setavenger({ ...avenger, lastName: e.target.value })}
      />
    </>
  );
};
