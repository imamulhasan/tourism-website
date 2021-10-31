import { Container, Navbar ,Button ,Form ,Nav, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navLogo from '../../../images/navber/logo.png';
import useAuth from '../../Hooks/UseAuth';


const Header = () => {
    const {user, LogOut}=useAuth()
    return (
        <div>
            <Navbar sticky="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                    <img width="180px" src={navLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className="text-decoration-none nav-link ms-3 " to="/">Home</Link>
                        {user?.email&& <Link className="text-decoration-none nav-link ms-3 " to="/managebookings">Manage Bookings</Link>}
                        {
                            user?.email&& <Link className="text-decoration-none nav-link ms-3 " to="/mybookings">My Bookings</Link>
                        }
                        <Link className="text-decoration-none nav-link ms-3 " to="/addtravel">Add Travel</Link>

                        {
                            user?.email? <button onClick={LogOut} className="btn btn-success ms-3">Sing Out</button>:
                                <Link to="/login"><button className="btn btn-success ms-3">Register</button></Link>
                        } 
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    {user.email&& <p className="h5 ms-3 text-secondary mt-2 text-center"><i className="fas fa-user-circle"></i> {user.displayName}</p>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;