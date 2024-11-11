import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await api.post("/users/register", { name, email, password, age });
            navigate("/");  
        } catch (err) {
            setError(err.response.data.message || "Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500">
                    Already have an account?{" "}
                    <Link to="/" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
