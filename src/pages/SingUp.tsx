import React from "react";
import Header from "../components/Header/Header";
import styles from "../sass/SignUp.module.scss";
import BackImg from "../components/Header/BackImg";
import Input from "../components/Header/Input/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async () => {
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/main");
  });
  const navigate = useNavigate();
  return (
    <div>
      <BackImg />
      <div className={styles.content}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h1>Unlimited movies, TV shows and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>
              Ready to watch? Enter your email to create or restart membership.
            </p>
            <form action="">
              <input
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    [e.target.name]: e.target.value,
                  })
                }
                type={"email"}
                placeholder={"Email adress"}
                name="email"
                value={formValue.email}
              />
              {showPassword && (
                <input
                  type={"password"}
                  placeholder={"Password"}
                  onChange={(e) =>
                    setFormValue({
                      ...formValue,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="password"
                  value={formValue.password}
                />
              )}
              {!showPassword && (
                <button onClick={() => setShowPassword(true)} type="submit">
                  Get Started
                </button>
              )}
            </form>
            {showPassword && (
              <button className={styles.log} onClick={handleSignIn}>
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
