import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({ label, placeholder, type, onChange, name, value }) => {
    return <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control name={name} type={type || "text"} placeholder={placeholder} onChange={onChange} value={value} />
    </Form.Group>
}

export default InputField;