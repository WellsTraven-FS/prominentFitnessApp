import React, { useState } from "react";
import { Link } from "react-router-dom";

// Gym Workout Videos
import JumpBattleRopeVideo from "../videos/JumpBattleRope.MP4";
import BenchPressVideo from "../videos/BenchPress.MP4";
import ChestFliesVideo from "../videos/ChestFlies.MP4";
import BicepsVideo from "../videos/Biceps.MP4";

const AtGymVideoPage = () => {
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
                <h1>Gym Workouts</h1>
                <section style={styles.sectionEdit}>
                    <section>
                        <video
                            src={JumpBattleRopeVideo}
                            width="300px"
                            height="300px"
                            controls
                        />
                        <p>Jump Battle Rope</p>
                    </section>
                    <section>
                        <video
                            src={BenchPressVideo}
                            width="300px"
                            height="300px"
                            controls
                        />
                        <p>Bench BenchPress</p>
                    </section>
                    <section>
                        <video
                            src={ChestFliesVideo}
                            width="300px"
                            height="300px"
                            controls
                        />
                        <p>Chest Chest Flies</p>
                    </section>
                    <section>
                        <video
                            src={BicepsVideo}
                            width="300px"
                            height="300px"
                            controls
                        />
                        <p>Biceps</p>
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

export default AtGymVideoPage;

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
