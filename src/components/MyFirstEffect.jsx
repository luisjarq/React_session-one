import { useEffect, useState } from "react";

export const MyFirstEffect = () => {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    (async () => {
      let data = fetch("https://rickandmortyapi.com/api/character/").then(
        (res) => res.json
      );
      setCharacterList(data);
    })();
  }, []);
  return (
    <>
      {characterList.map((ch) => (
        <div key={ch.id}>
          <h2>name: {ch.name}</h2>
        </div>
      ))}
    </>
  );
};
