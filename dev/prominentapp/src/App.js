import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthService from "./services/auth.service";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing Signup and Login page
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Dashboard";
import AtHomeVideoPage from "./pages/AtHomeVideoPage";
import AtGymVideoPage from "./pages/AtGymVideoPage";
import MemberDashboard from "./pages/MemberDashboard";

function App() {
    const [currentUser, setCurrentUser] = useState(false);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logout = () => {
        AuthService.logout();
    };
    return (
        <div style={styles.divEdit}>
            <Header />
            <main style={styles.mainEdit}>
                <section>
                    {/* {currentUser === false ? (
                    <h2>Logged In</h2>
                ) : (
                    <h2>Logged Out</h2>
                )} */}

                    <Routes>
                        <Route
                            path="/memberDashboard"
                            exact
                            element={<MemberDashboard />}
                        />
                        <Route path="/home" exact element={<Home />} />
                        <Route path="/signup" exact element={<Signup />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/logout" exact element={<Logout />} />
                        <Route
                            path="/atHomeVideo"
                            exact
                            element={<AtHomeVideoPage />}
                        />
                        <Route
                            path="/atGymVideo"
                            exact
                            element={<AtGymVideoPage />}
                        />
                        <Route path="/" exact element={<Dashboard />} />
                    </Routes>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;

const styles = {
    divEdit: {
        width: "80%",
        margin: "auto",
    },
    mainEdit: {
        marginTop: "20px",
        background: "rgb(212 212 212/70%)",

        // Border Style
        borderRadius: "3px",
    },
};
