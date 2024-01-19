import React, { useState } from "react";
import { Link } from "react-router-dom";

// Images Imports
import GymCoverImg from "../images/gymCover.jpeg";

const Dashboard = () => {
    // Signup Button Functions
    const [signUpHover, setSignUpHover] = useState(false);
    const handleMouseHoverSignUp = () => {
        setSignUpHover(true);
    };
    const handleMouseNoHoverSignUp = () => {
        setSignUpHover(false);
    };

    const signUpButtonEdit = {
        // Button Dimensions
        padding: "10px",

        // Typography
        fontSize: "40px",
        textAlign: "center",
        color: "white",

        // Text Style
        textDecorationLine: "none",
        background: "gray",

        // Border
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: "10px",

        // signUpHover Function
        backgroundColor: signUpHover ? "orange" : "green",
        color: signUpHover ? "red" : "white",
    };

    // Login button Function Hover
    const [loginHover, setLoginHover] = useState(false);
    const handleMouseHoverLogin = () => {
        setLoginHover(true);
    };
    const handleMouseNoHoverLogin = () => {
        setLoginHover(false);
    };
    const loginButtonEdit = {
        // Button Dimensions
        padding: "10px",

        // Typography
        fontSize: "40px",
        textAlign: "center",
        color: "white",

        // Text Style
        textDecorationLine: "none",
        background: "gray",

        // Border
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: "10px",

        // loginHover Function
        backgroundColor: loginHover ? "orange" : "salmon",
        color: loginHover ? "red" : "white",
    };
    return (
        <div>
            <main style={styles.mainEdit}>
                <section style={styles.sectionEdit}>
                    <img
                        style={styles.gymCoverImgEdit}
                        src={GymCoverImg}
                        alt=""
                    />
                </section>
                <section style={styles.sectionButton}>
                    <section style={styles.spacingEdit}>
                        <Link
                            to="/signup"
                            style={signUpButtonEdit}
                            onMouseEnter={handleMouseHoverSignUp}
                            onMouseLeave={handleMouseNoHoverSignUp}
                        >
                            Signup
                        </Link>
                    </section>

                    <section>
                        <Link
                            to="/login"
                            style={loginButtonEdit}
                            onMouseEnter={handleMouseHoverLogin}
                            onMouseLeave={handleMouseNoHoverLogin}
                        >
                            Login
                        </Link>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;

const styles = {
    mainEdit: {
        margin: "auto",
        textAlign: "center",
    },
    gymCoverImgEdit: {
        // Image Dimensions
        width: "90%",
        height: "80%",
        objectFit: "cover",

        // Border
        borderStyle: "solid",
        borderRadius: "5px",
    },
    sectionEdit: {
        paddingTop: "40px",
    },
    sectionButton: {
        // Container Dimensions
        width: "30%",
        margin: "auto",
        marginTop: "40px",
        paddingBottom: "50px",

        // Object Position
        display: "flex",
        flexDirection: "row",
        justifyContent: "",
    },

    // Space between buttons
    spacingEdit: {
        marginRight: "20px",
    },
};
