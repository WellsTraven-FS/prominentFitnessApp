import React from "react";

const Footer = () => {
    return (
        <section>
            <footer style={styles.footerEdit}>
                <p>
                    Copyright &copy; 2022-
                    <script>
                        document.write(new Date().getFullYear())
                    </script>{" "}
                    Traven Wells
                </p>
            </footer>
        </section>
    );
};

export default Footer;

const styles = {
    footerEdit: {
        marginTop: "100px",
        fontSize: "20px",
        textAlign: "center",
        color: "white",
    },
};
