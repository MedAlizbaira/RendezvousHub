import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import { useEffect } from "react";

function App() {
  const [personData, setPersonData] = useState(person);
  const [newPerson, setNewPerson] = useState({
    id: personData.length + 1,
    name: "",
    date: "",
    image: "" // You can set a default image URL if needed
  });

  useEffect(() => {
    return () => {
      setPersonData([]);
    };
  }, []);

  const onDelete = () => {
    setPersonData([]);
  };

  const onViewData = () => {
    setPersonData(person);
  };

  const onAddData = () => {
    if (newPerson.name && newPerson.date) {
      setPersonData([...personData, newPerson]);
      setNewPerson({
        id: personData.length + 1,
        name: "",
        date: "",
        image: ""
      });
    }
  };

  return (
    <div>
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction
          deleteData={onDelete}
          onViewData={onViewData}
          onAddData={onAddData}
          newPerson={newPerson}
          setNewPerson={setNewPerson}
        />
      </Container>
    </div>
  );
}

export default App;
