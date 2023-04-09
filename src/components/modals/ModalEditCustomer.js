<Modal show={show} onHide={handleClose}   >
<Modal.Header closeButton className="modalHeaderColor">
  <Modal.Title>Edycja uczestnika</Modal.Title>
</Modal.Header>
<Modal.Body className="modalBodyColor">
  <div className="row">
    <div className="col-lg-12">
      <label htmlFor="name" className="form-label">Wpisz imię i nazwisko</label>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12"><input type="text" className="form-control"
      defaultValue={editUser.name}
      name="name"
      id="name"
      onChange={getUser}></input>
    </div>
  </div>

  <div className="row">
    <div className="col-lg-12">
      <Form.Label>Wybierz miasto</Form.Label>
      <Form.Control
        as="select"
        name="city"
        id="city"
        onChange={getUser}
      >
        <option value={editUser.city} name="city"  >{editUser.city}</option>
        <option value="Wrocław" name="city">Wrocław</option>
        <option value="Kraków" name="city">Kraków</option>
        <option value="Warszawa" name="city">Warszawa</option>
        <option value="Zielona Góra" name="Zielona Góra">Zielona Góra</option>
      </Form.Control>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12">
      <Form.Label >Wybierz kurs</Form.Label>
      <Form.Control
        as="select"
        name="course"
        onChange={getUser}
      >
        <option value={editUser.course} name="course" >{editUser.course}</option>
        <option value="Front End Developer" name="course">Front End Developer</option>
        <option value="Back End Developer" name="course">Back End Developer</option>
        <option value="Full Stack Developer" name="course">Full Stack Developer</option>
        <option value="Zaawansowany kurs Reacta" name="course">Zaawansowany kurs Reacta</option>
      </Form.Control><br />

    </div>
  </div>
</Modal.Body>
<Modal.Footer className="modal-footer">
  <Button variant="outline-secondary" onClick={handleClose}>
    Anuluj
  </Button>
  <Button variant="outline-success" onClick={(e) => { updateUser(editUser) }}>
    Zapisz zmiany
  </Button>
</Modal.Footer>
</Modal>