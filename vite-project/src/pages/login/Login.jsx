import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Link to='/dashboard'>
                        <button
                            type="submit"
                            className="w-full my-4 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            Login
                        </button>
                    </Link> 
                </form>
                <p className="text-sm text-center text-gray-500">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
