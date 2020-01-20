import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function InitForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    props.create(
      data.name,
      Number(data.init),
      data.type,
      props.data.length + 1 //This one is to offset the array[0] position
    );
  };

  return (
    <div className="initform">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="justify-content-md-center"
      >
        <Form.Group controlId="formName">
          <Form.Label>Create new Trackee ({props.data.length})</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            ref={register({ required: true, min: 1 })}
          />
        </Form.Group>

        <Form.Group controlId="formInit">
          <Form.Control
            type="number"
            placeholder="Inititative (#)"
            name="init"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="formType">
          <Form.Control
            as="select"
            name="type"
            ref={register({ required: true })}
          >
            <option value="Player">Player</option>
            <option value="NPC"> NPC</option>
          </Form.Control>
          <Form.Text>Select Trackee type</Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit new Trackee
        </Button>
      </Form>
    </div>
  );
}
