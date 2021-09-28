/** @format */
import { Store } from "../redux/store";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import {} from "../redux/reducer";
import { useSelector } from "react-redux";
import ToggleButton from "react-bootstrap/ToggleButton";

type NavProps = {
	themeChecked: boolean;
	checked: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function NavigationBar({ themeChecked, checked }: NavProps) {
	//These are props that we will use for calling these behaviour in another component.
	const cart = useSelector((state: Store) => state.cart);

	return (
		<Navbar fixed="top" bg="primary" variant="dark" expand="lg" className="nav-container">
			<Container>
				<Navbar.Brand className="mx-4" href="#home">
					<img
						alt="global icon"
						src="/global-icon.png"
						width="30"
						height="30"
						className="d-inline-block align-top mx-3"
					/>{" "}
					Country API Project
				</Navbar.Brand>
				<Nav className="nav-links">
					<LinkContainer to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>

					<Nav.Link href="#contact">Let's Connect</Nav.Link>
					<LinkContainer to="/cart">
						<Button className="fav-counter">
							<BsBookmarkPlus size={25} /> favList{" "}
							<Badge bg="secondary">{cart.length}</Badge>
							<span className="visually-hidden">unread messages</span>
						</Button>
					</LinkContainer>

					<ToggleButton
						className="toggle-button"
						id="toggle-check"
						type="checkbox"
						value="1"
						checked={themeChecked} // a value
						onChange={checked} // onChange is a function that manipulates what is checked
					>
						Change Theme
					</ToggleButton>

					<Button href="!#">
						<FaTwitterSquare size={25} className="fa-icons" />
					</Button>
					<Button href="!#">
						<FaLinkedin size={25} className="fa-icons" />
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
}
export default NavigationBar;
