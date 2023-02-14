import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
const Login = lazy(() => import("../pages/Login"))
const MovieList = lazy(() => import("../pages/MovieList"))

const Routers = (props) => {
    return <Fragment>
            <Suspense
                fallback={<h1>Loading</h1>}>
                <Routes key={props?.email}>
                    {props?.email &&
                        (<Route path="/" element={<MovieList />}></Route>)}
                    <Route path="/" element={<Login />}></Route>
                </Routes>
            </Suspense>
    </Fragment>
}
const mapStateToProps = state => {
    return {
        email: state.login.email
    }
}
export default connect(mapStateToProps)(Routers);