import React, { useState } from "react";
import { Link } from "react-router-dom";

// Home Workout Videos
import HomeVideo1 from "../homeVideos/HomeVideo1.mp4";
import HomeVideo2 from "../homeVideos/HomeVideo2.mp4";
import HomeVideo3 from "../homeVideos/HomeVideo3.mp4";
import HomeVideo4 from "../homeVideos/HomeVideo4.mp4";

const AtHomeVideoPage = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseHover = () => {
        setIsHover(true);
    };
    const handleMouseNoHover = () => {
        setIsHover(false);
    };

    const homeButtonEdit = {
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
        backgroundColor: isHover ? "orange" : "gray",
        color: isHover ? "red" : "white",
    };

    return (
        <div>
            <main style={styles.mainEdit}>
                <h1>Home Exercises</h1>
                <section style={styles.sectionEdit}>
                    <section>
                        <video
                            src={HomeVideo1}
                            width="300px"
                            height="300px"
                            controls
                        />
                        <p>HIIT Day One</p>
                    </section>
                    <section>
                        <video
                            src={HomeVideo2}
                            width="300px"
                            height="300px"
                            controls
                        />
                        <p>HIIT Day Two</p>
                    </section>
                </section>
                <section style={styles.spacingEdit}>
                    <Link
                        to="/home"
                        style={homeButtonEdit}
                        onMouseEnter={handleMouseHover}
                        onMouseLeave={handleMouseNoHover}
                    >
                        Home
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default AtHomeVideoPage;

const styles = {
    mainEdit: {
        margin: "auto",
        textAlign: "center",
        padding: "40px",

        // Border
        borderStyle: "solid",
        borderWidth: "3px",
        borderColor: "black",
    },
    sectionEdit: {
        // Dimension
        paddingTop: "20px",
        paddingBottom: "80px",
        marginBottom: "40px",

        // Flex
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        justifyItems: "center",

        // Style
        background: "gray",

        // Border:
        borderStyle: "solid",
        borderColor: "darkgray",
    },

    // Space between buttons
    spacingEdit: {
        marginBottom: "20px",
    },
};
