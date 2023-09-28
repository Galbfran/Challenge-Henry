"use client";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSession, signIn, signOut } from "next-auth/react"


function NavBar() {
    const { data:session } = useSession()
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >Encuestas On-line</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" className="nav-link">Inicio</Link>
                        {
                            session ? (
                                <button onClick={() => signOut()}>Salir</button>
                            ): (
                                <button onClick={() => signIn()}>Ingresar</button>
                            )
                        }
                        <Link href="/adminpage" className="nav-link">Admin</Link>
                        <Link href="/encuestas/1" className="nav-link">Encuestas</Link>
                        <Link href="/perfil/1" className="nav-link">Perfil</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;