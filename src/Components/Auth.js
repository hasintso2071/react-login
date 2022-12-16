
import React, { useState } from "react"

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Authentification</h3>
            <div className="text-center">
              Pas encore enregistré{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                S'inscrire
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Votre email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Entre votre mail"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Entre votre mot de passe"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Connexion
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Déja enrégistré?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Se connecter
            </span>
          </div>
          <div className="form-group mt-3">
            <label> Adresse email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Votre email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Votre mot de passe"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Enregistrer
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
