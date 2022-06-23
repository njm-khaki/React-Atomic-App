import React, { useState } from 'react';
import ElevatedButton from '../../common/atoms/ElevatedButton/ElevatedButton';
import TextField from '../../common/atoms/TextField/TextField';
import ExpandedRow from '../../common/organisms/ExpandedRow/ExpandedRow';
import ResponsiveColum from '../../common/organisms/ResponsiveColum/ResponsiveColum';

const Login: React.FC = () => {
    const [userName, setUserName] = useState(``)
    const [password, setPassword] = useState(``)

    return (
        <React.Fragment>
            <ExpandedRow>
                <ResponsiveColum>
                    <TextField 
                        type="text" 
                        placeholder="user name" 
                        onChange={
                            async (userName) => setUserName(userName)
                        }
                    />
                </ResponsiveColum>
            </ExpandedRow>
            <ExpandedRow>
                <ResponsiveColum>
                    <TextField 
                        type="password" 
                        placeholder="password" 
                        onChange={
                            async (password) => setPassword(password)
                        }
                    />
                </ResponsiveColum>
            </ExpandedRow>
            <ExpandedRow>
                <ResponsiveColum>
                    <ElevatedButton
                        onClick={
                            async () => console.log(`user name: ${userName}, password: ${password}`)
                    }
                    >
                        Login
                    </ElevatedButton>
                </ResponsiveColum>
            </ExpandedRow>
        </React.Fragment>
    );
}

export default Login;