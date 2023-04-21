
import { Navbar, Nav, Container } from "react-bootstrap"


import { Outlet, Link } from "react-router-dom"
 

//NavBar

const NavbarEx = ()=>{
    return(
        <>
            <Navbar className="navBg" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as = {Link} to= "/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        //Estos son los enlaces a los componentes

                        <Nav.Link as = {Link} to= "/">BlogList</Nav.Link>
                        <Nav.Link as = {Link} to ="BlogPost">BlogPost</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>  
                </Container>
                </Navbar>

                <section>
                    <Outlet></Outlet>
                </section>
        </>
    )
}

export {NavbarEx};