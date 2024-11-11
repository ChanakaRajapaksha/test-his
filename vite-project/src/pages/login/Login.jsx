import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users/login", { email, password });

            if (response.data.token && response.data.user) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));

                navigate("/dashboard");
            } else {
                setError("Invalid response structure");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
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
                    <button
                        type="submit"
                        className="w-full my-4 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
