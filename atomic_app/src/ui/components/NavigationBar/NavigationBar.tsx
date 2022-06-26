import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import Title from './atoms/Title';
import NavigationColumn from './organisms/NavigationColumn';

const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Title />
                <NavigationColumn>
                    <NavDropdown title="Dropdown">
                        <NavDropdown.Item>Action</NavDropdown.Item>
                        <NavDropdown.Item>Another action</NavDropdown.Item>
                        <NavDropdown.Item>Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Separated link</NavDropdown.Item>
                    </NavDropdown>
                </NavigationColumn>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;