import { Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

const Login = lazy(() => import("../pages/Login"))
const MovieList = lazy(() => import("../pages/MovieList"))

const Routers = (props) => {
    return <Fragment>
        <Routes key={props?.email}>
            {props?.email &&
                <Route path="/" element={<MovieList />}></Route>}
                <Route path="/" element={<Login />}></Route>
        </Routes>
    </Fragment>
}
const mapStateToProps = state => {
    return {
        email: state.login.email
    }
}
export default connect(mapStateToProps)(Routers);