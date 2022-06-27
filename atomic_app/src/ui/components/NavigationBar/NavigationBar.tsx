import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import Title from './atom/Title';
import NavigationColumn from './organism/NavigationColumn';
import LogoutItem from './molecules/LogoutItem'

interface Props {
    username?: string;
}

const NavigationBar: React.FC<Props> = (props) => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Title />
                <NavigationColumn>
                    <NavDropdown title={`${props.username ?? `sign in`}`}>
                        <NavDropdown.Item>Action</NavDropdown.Item>
                        <NavDropdown.Item>Another action</NavDropdown.Item>
                        <NavDropdown.Item>Something</NavDropdown.Item>
                        <LogoutItem username={props.username} />
                    </NavDropdown>
                </NavigationColumn>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;