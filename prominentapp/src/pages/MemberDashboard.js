import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";
import MembersService from "../services/members.service";

function MemberDashboard() {
    const [members, setMembers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [values, setValues] = useState({
        name: "",
        age: "",
        weight: "",
        location: "",
        goal: "",
    });

    const { id } = useParams;
    const navigate = useNavigate();

    const API_BASE =
        process.env.NODE_ENV === "development"
            ? "http://localhost:4000/api/v1"
            : process.env.REACT_APP_BASE_URL;

    let ignore = false;
    useEffect(() => {
        if (!ignore) {
            getMembers();
        }
        return () => {
            ignore = true;
        };
    }, []);
    // useEffect(() => {
    //     MembersService.getAllPrivateMembers().then(
    //         (response) => {
    //             setMembers(response.data);
    //         },
    //         (error) => {
    //             console.log("Secured Page Error: ", error.response);
    //             if (error.response && error.response.status == 403) {
    //                 AuthService.logout();
    //                 navigate("/login");
    //             }
    //         }
    //     );
    // }, []);
    const getMembers = async () => {
        try {
            await fetch(`${API_BASE}/members${id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log({ data });
                    setValues({
                        name: data.name,
                        age: data.age,
                        weight: data.weight,
                        location: data.location,
                        goal: data.goal,
                    });
                });
        } catch (error) {
            setError(error.message || "Unexpected Error");
        } finally {
            setLoading(false);
        }
    };
    const createMember = async () => {
        try {
            await fetch(`${API_BASE}/members`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((res) => res.json())
                .then((data) => {
                    setMembers(data);
                });
        } catch (error) {
            setError(error.message || "Unexpected Error");
        } finally {
            setLoading(false);
            navigate("/home", { replace: true });
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createMember(values);
    };

    // const updateMember = async () => {
    //     try {
    //         await fetch(`${API_BASE}/members/${id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(values),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setMembers(data);
    //             });
    //     } catch (error) {
    //         setError(error.message || "Unexpected Error");
    //     } finally {
    //         setLoading(false);
    //         navigate("/home", { replace: true });
    //     }
    // };

    const deleteMember = async () => {
        try {
            await fetch(`${API_BASE}/members/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    setMembers(data);
                });
        } catch (error) {
            setError(error.message || "Unexpected Error");
        } finally {
            setLoading(false);
            navigate("/dashboard", { replace: true });
        }
    };

    const handleInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <div className="App">
            <main className="App-header" style={styles.mainEdit}>
                <h1>Member</h1>
                <Link to="/">Home</Link>

                {/* The bellow code for members will not be deleted until I'm able to figure out how to retrieve the information from the model once the user inputs their information for the profile. */}
                {/* <ul>
                    {members &&
                        members.map((member) => (
                            <li key={member._id}>
                                <Link to={`/members/${member._id}`}>
                                    {member.name}
                                </Link>
                            </li>
                        ))}
                </ul> */}
                <h1>Profile</h1>
                <p>Name: {values && values.name}</p>
                <p>Age: {values && values.age}</p>
                <p>Weight: {values && values.weight}lbs</p>
                <p>Location: {values && values.location}</p>
                <p>Goal: {values && values.goal}</p>

                <p>Please finish completing your account...</p>
                <section style={styles.sectionEdit}>
                    <form
                        onSubmit={(event) => handleSubmit(event)}
                        style={styles.formEdit}
                    >
                        <section>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name"
                                value={values.name}
                                onChange={handleInputChange}
                                style={styles.inputOneEdit}
                            />
                        </section>

                        <section>
                            <input
                                type="number"
                                name="age"
                                placeholder="Enter age"
                                value={values.age}
                                onChange={handleInputChange}
                                style={styles.inputTwoEdit}
                            />
                        </section>

                        <section>
                            <input
                                type="number"
                                name="weight"
                                placeholder="Enter weight"
                                value={values.weight}
                                onChange={handleInputChange}
                                style={styles.inputThreeEdit}
                            />
                        </section>
                        <section>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter location"
                                value={values.location}
                                onChange={handleInputChange}
                                style={styles.inputFourEdit}
                            />
                        </section>
                        <section>
                            <input
                                type="text"
                                name="goal"
                                placeholder="Enter goal"
                                value={values.goal}
                                onChange={handleInputChange}
                                style={styles.inputFiveEdit}
                            />
                        </section>
                        <section>
                            <input
                                type="submit"
                                value="Submit"
                                style={styles.submitButton}
                            />
                        </section>
                        <section>
                            <button
                                onClick={() => deleteMember()}
                                style={styles.deleteButton}
                            >
                                Delete Information
                            </button>
                        </section>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default MemberDashboard;

const styles = {
    formEdit: {
        // FLEX
        display: "flex",
        flexDirection: "column",
    },
    // Input Fields
    inputOneEdit: {
        marginTop: "20px",
        marginBottom: "10px",
    },
    inputTwoEdit: {
        marginTop: "5px",
        marginBottom: "10px",
    },
    inputThreeEdit: {
        marginTop: "5px",
        marginBottom: "10px",
    },
    inputFourEdit: {
        marginTop: "5px",
        marginBottom: "10px",
    },
    inputFiveEdit: {
        marginTop: "5px",
        marginBottom: "10px",
    },

    // Submit Button
    submitButton: {
        width: "34%",
        marginBottom: "20px",
        fontSize: "15px",
        color: "blue",
    },
    deleteButton: {
        width: "34%",
        marginBottom: "20px",
        fontSize: "15px",
        color: "blue",
    },

    sectionEdit: {
        // Dimension
        width: "50%",
        margin: "auto",
        marginBottom: "50px",

        // Box Shadow Style

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
