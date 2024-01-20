import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            await AuthService.signup(email, password).then(
                (response) => {
                    navigate("/memberDashboard");
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <main style={styles.mainEdit}>
                <h2>Please register your account...</h2>

                <section style={styles.sectionEdit}>
                    <form onSubmit={handleSignUp} style={styles.formEdit}>
                        <section>
                            <br></br>
                            <label>Email °</label>
                            <br></br>
                            <input
                                type="text"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={styles.inputOneEdit}
                            />
                        </section>
                        <section>
                            <label>Password *</label>
                            <br></br>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={styles.inputTwoEdit}
                            />
                        </section>
                        <button type="submit" style={styles.submitButton}>
                            Create Account
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default SignUp;

const styles = {
    formEdit: {
        // Typography
        textAlign: "center",
    },
    // Input Fields
    inputOneEdit: {
        marginTop: "5px",
    },
    inputTwoEdit: {
        marginTop: "5px",
        marginBottom: "10px",
    },

    // Submit Button
    submitButton: {
        marginBottom: "20px",
        fontSize: "15px",
        color: "blue",
    },

    sectionEdit: {
        // Dimension
        width: "50%",
        height: "",
        margin: "auto",
        marginBottom: "50px",

        // Style
        background: "white",
    },

    pEdit: {
        marginTop: "20px",
    },

    mainEdit: {
        paddingTop: "10px",
        textAlign: "center",
        paddingBottom: "50px",
    },
};
