import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/HomePage/Home/Home';
import AddTravel from './Pages/AddTravel/AddTravel';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import MyBookings from './Pages/MyBookings/MyBookings';
import Login from './Pages/Login/Login';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';



function App() {
  return (
    <>
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/managebookings">
        <ManageBookings></ManageBookings>
        </PrivateRoute>
        <PrivateRoute path="/mybookings">
        <MyBookings></MyBookings>
        </PrivateRoute>
        <PrivateRoute path="/addtravel">
         <AddTravel></AddTravel>
        </PrivateRoute>
        <PrivateRoute path="/booking/:id">
        <Booking></Booking>
        </PrivateRoute>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </>
  );
}

export default App;
