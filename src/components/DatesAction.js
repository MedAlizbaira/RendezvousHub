import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

const DatesAction = ({ deleteData, onViewData, onAddData, newPerson, setNewPerson }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({
      ...newPerson,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setNewPerson({
        ...newPerson,
        image: imageUrl,
      });
    }
  };

  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <Button onClick={onViewData} className="btn btn-primary p-2 m-2">
          Afficher tout
        </Button>
        <Button onClick={deleteData} className="btn btn-danger p-2 m-2">
          Supprimer tout
        </Button>
      </Col>
      <Col sm="8" className="mt-2">
        <Form>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newPerson.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              name="date"
              value={newPerson.date}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="imageFile"
              onChange={handleImageUpload}
            />
          </Form.Group>
          {newPerson.image && (
            <img src={newPerson.image} alt="Aperçu de l'image" />
          )}
          <Button onClick={onAddData} className="btn btn-success p-2 m-2">
            Ajouter
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default DatesAction;
