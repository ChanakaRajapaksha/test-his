import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";

import Appointments from "../components/Appoinments";
import UpdateUserModal from "../components/UpdateUserModal";
import Button from "../components/Button";

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("No token found");
                    return;
                }

                const response = await api.get(`/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");
            await api.delete(`/users/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("User deleted successfully.");
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleUserUpdate = (updatedUser) => {
        setUser(updatedUser);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className="flex flex-col xl:flex-row gap-4 p-4 flex-1">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="px-10 py-6 bg-[#C3EBFA] rounded-md flex flex-1 gap-4">
                        <div className="w-1/3">
                            <img
                                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt="profile"
                                width={144}
                                height={144}
                                className="w-36 h-36 rounded-full object-cover"
                            />
                        </div>
                        <div className="w-2/3 flex flex-col gap-4">
                            <div className="flex items-center gap-4 mb-6">
                                <h1 className="text-xl font-semibold">{user.name}</h1>
                            </div>
                            <div className="flex items-center flex-wrap gap-2 justify-between text-md font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <img src="/mail.png" alt="blood" width={14} height={14} />
                                    <span>{user.email}</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <span className="text-red-500">Role: {user.role}</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <img src="/date.png" alt="blood" width={14} height={14} />
                                    <span>Age: {user.age}</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Button
                                    name="Edit Profile"
                                    isBeam
                                    containerClass="mt-10 max-content"
                                    onClick={() => setIsModalOpen(true)}
                                />
                                <Button
                                    name="Delete Profile"
                                    isBeam
                                    containerClass="mt-10 max-content"
                                    onClick={handleDelete}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-between gap-4 flex-wrap">
                        <div className="bg-[#F1F0FF] p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <div className="">
                                <h1 className="text-xl font-semibold">{user.status ? "Active" : "Inactive"}</h1>
                                <span className="text-sm text-gray-400">Status</span>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/status.png"
                                        alt="status"
                                        width={40}
                                        height={40}
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                </div>
                <Appointments />
            </div>

            {/* Update Modal */}
            {isModalOpen && <UpdateUserModal user={user} onClose={() => setIsModalOpen(false)} onUpdate={handleUserUpdate} />}
        </div>
    );
};

export default Profile;
