import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const AuthButton = () => {
	const { isAuthenticated } = useAuth0();
	if (isAuthenticated) {
		return <LogoutButton />
	} else {
		return <LoginButton />
	}
};

export default AuthButton;