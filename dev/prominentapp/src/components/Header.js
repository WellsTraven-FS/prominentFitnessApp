import React from "react";
import LogoImg from "../images/Logo.jpeg";

const Header = () => {
    return (
        <section>
            <header style={styles.header}>
                <img style={styles.leftImgEdit} src={LogoImg} alt="" />
                <h1 style={styles.h1Edit}>PROMINENT</h1>
                <img style={styles.RightImgEdit} src={LogoImg} alt="" />
            </header>
        </section>
    );
};

export default Header;

const styles = {
    header: {
        //Dimensions
        margig: "auto",
        height: "80px",
        background: "darkorange",

        // Responsiveness
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        // Border
        borderStyle: "solid",
        borderWidth: "2px",
        borderRadius: "4px",
    },
    h1Edit: {
        // Typography
        fontSize: "30px",
        letterSpacing: "20px",
    },

    leftImgEdit: {
        //Dimensions
        width: "40px",
        height: "40px",
        objectFit: "cover",

        // Object Position
        marginTop: "20px",
        marginLeft: "20px",

        // Border Style
        borderStyle: "solid",
        borderRadius: "999px",
        borderWidth: "1px",
        borderColor: "gray",
    },
    RightImgEdit: {
        //Dimensions
        width: "40px",
        height: "40px",
        objectFit: "cover",

        // Object Position
        marginTop: "20px",
        marginRight: "20px",

        // Border Style
        borderStyle: "solid",
        borderRadius: "999px",
        borderWidth: "1px",
        borderColor: "gray",
    },
};
