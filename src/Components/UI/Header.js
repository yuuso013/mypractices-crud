import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Header() {
    const { isAuthenticated } = useAuth0();
    return(
    <div className="App-header">
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton/>
          </>
        ) : (
          <LoginButton/>
        )}
      </div>
    )
}