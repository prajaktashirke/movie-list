import React, { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import InputField from "../component/InputField";
import "../css/login.css"
import { register } from "../redux/login/loginAction";

const Login = (props) => {
    const [formDetails, setFormDetails] = useState({});

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    return <div className="row ">

        {/* <div className="col"></div> */}
        <div className="col d-flex align-items-center justify-content-center contact-content">
            <div className="p-3">
                <InputField
                    label={"Email address"}
                    name={"email"}
                    placeholder={"Enter placeholder"}
                    type={"text"}
                    value={formDetails?.email || ""}
                    onChange={onChange}
                />
                <InputField
                    label={"Password"}
                    placeholder={"Enter password"}
                    type={"password"}
                    name = {"password"}
                    value = {formDetails?.password || ""}
                    onChange={onChange}
                />
                {/* <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}
                <Button variant="primary" type="submit" onClick={() => {
                    props.login(formDetails)
                }}>
                    Submit
                </Button>

            </div>
        </div>
    </div>
}
const mapStateToProps = state => {
    return {
        email: state.login.email,
        password: state.login.password
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: n => dispatch(register(n))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);