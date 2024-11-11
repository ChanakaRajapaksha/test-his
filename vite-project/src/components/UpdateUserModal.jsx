import React, { useState } from "react";
import { api } from "../api";

const UpdateUserModal = ({ user, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        age: user.age,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const response = await api.put(`/users/${user.id}`, formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("User updated successfully");
            onUpdate(response.data); // Pass updated user to Profile
            onClose();
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-80">
                <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full rounded-md"
                        />
                    </label>
                    <label className="block mb-2">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full rounded-md"
                        />
                    </label>
                    <label className="block mb-2">
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full rounded-md"
                        />
                    </label>
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUserModal;
