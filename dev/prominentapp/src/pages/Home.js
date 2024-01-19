import React, { useState } from "react";
import { Link } from "react-router-dom";
import AtHomePhoto from "../images/atHomePhoto.jpg";
import AtGymPhoto from "../images/atGymPhoto.jpeg";
const Home = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseHover = () => {
        setIsHover(true);
    };
    const handleMouseNoHover = () => {
        setIsHover(false);
    };

    const logOutButtonEdit = {
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

        // isHover Function
        backgroundColor: isHover ? "orange" : "orange",
        color: isHover ? "red" : "white",
    };
    return (
        <div>
            <main style={styles.mainEdit}>
                <h1>Workouts</h1>
                <section style={styles.sectionEdit}>
                    <section>
                        <h2>Home Workouts</h2>
                        <Link to="/atHomeVideo">
                            <img
                                src={AtHomePhoto}
                                alt=""
                                style={styles.atHomeImgEdit}
                            />
                        </Link>
                    </section>

                    <section>
                        <h2>Gym Workouts</h2>
                        <Link to="/atGymVideo">
                            <img
                                src={AtGymPhoto}
                                alt=""
                                style={styles.atGymImgEdit}
                            />
                        </Link>
                    </section>
                </section>
                <Link
                    to="/logout"
                    style={logOutButtonEdit}
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={handleMouseNoHover}
                >
                    Logout
                </Link>
            </main>
        </div>
    );
};

export default Home;

const styles = {
    mainEdit: {
        margin: "auto",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "50px",

        // Border
        borderStyle: "solid",
        borderWidth: "3px",
        borderColor: "black",
    },
    atHomeImgEdit: {
        // Image Dimensions
        width: "350px",
        height: "350px",
        objectFit: "cover",

        // Border
        borderStyle: "solid",
        borderRadius: "5px",
    },
    atGymImgEdit: {
        // Image Dimensions
        width: "350px",
        height: "350px",
        objectFit: "cover",

        // Border
        borderStyle: "solid",
        borderRadius: "5px",
    },
    sectionEdit: {
        // Dimension
        paddingTop: "20px",
        paddingBottom: "40px",

        // Flex
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
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
