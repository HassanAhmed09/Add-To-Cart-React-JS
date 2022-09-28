import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import  {FaShoppingCart}  from 'react-icons/fa';
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
    const{openCart, cartQuantity} = useShoppingCart()
  return (
    <NavbarBs sticky='top' className="bg-white shadow-sm mb-3 ">
        <Container>
            <Nav>
               <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
               <Nav.Link to={"/store"} as={NavLink}>Store</Nav.Link>
               <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
           </Nav>
           </Container>
           {cartQuantity > 0 && (<Button 
           onClick={openCart} style={{ width: "3rem", height:"3rem",marginRight:"1rem"}}
                            variant="outline-primary"
                            className="rounded-circle">
           <FaShoppingCart/>
           <div 
           className='rounded-circle bg-danger d-flex justify-content-center align0items-center' 
           style={{ color:"white",
                     width: "1.5rem",  
                     height:"1.5rem", 
                     position:"absolute",
                     bottom:"0",
                     right:"0",
                     marginRight:"1rem",
                     transform: "translate(25%, 25%)"}}>{cartQuantity}</div>
           </Button>)}
    </NavbarBs>
  )
}

export default Navbar