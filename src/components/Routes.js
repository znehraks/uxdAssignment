import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../Routes/Main";
import MyPage from "../Routes/MyPage";
import Product from "../Routes/Product";
import ProductDetail from "../Routes/ProductDetail";
import Auth from "../Routes/Auth";
import Question from "../Routes/Question";
import Menu from "../Routes/Menu";
import AboutUs from "../Routes/AboutUs";
import QandA from "../Routes/QandA";
import AIQuestion from "../Routes/AIQuestion";
import OrderList from "../Routes/OrderList";
import OrderHistory from "../Routes/OrderHistory";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main}></Route>
    <Route exact path="/Menu" component={Menu}></Route>
    <Route exact path="/Auth" component={Auth}></Route>
    <Route exact path="/AboutUs" component={AboutUs}></Route>
    <Route exact path="/MyPage" component={MyPage}></Route>
    <Route exact path="/OrderList" component={OrderList}></Route>
    <Route exact path="/OrderHistory" component={OrderHistory}></Route>
    <Route exact path="/Question" component={Question}></Route>
    <Route exact path="/AIQuestion" component={AIQuestion}></Route>
    <Route exact path="/Product" component={Product}></Route>
    <Route exact path="/Q&A" component={QandA}></Route>
    <Route exact path="/ProductNumber" component={ProductDetail}></Route>
    <Redirect from="*" to="/" />
  </Switch>
);
const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/Auth" component={Auth} />
    <Redirect from="*" to="/Auth" />
  </Switch>
);

const AppRouter = ({ isLoggedIn=true }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
