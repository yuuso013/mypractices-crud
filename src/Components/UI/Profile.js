import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  return (
    isAuthenticated && (
      <div className="App-profile"> 
        <h2>¡Hola {user.name}! ¡Bienvenido/a al sitio de profesores de la página Mis Prácticas!</h2>
        <h2>Email del usuario: {user.email}</h2>
      </div>

    )
  );
};