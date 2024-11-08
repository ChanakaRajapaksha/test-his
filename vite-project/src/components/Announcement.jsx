import { announcementsData, previousAnnouncementsData } from '../lib/data';

const Announcement = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            {/* Latest Announcements Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Latest Announcements</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {announcementsData.map((announcement) => (
                        <div key={announcement.id} className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{announcement.title}</h3>
                            <p className="text-gray-600 mb-4">{announcement.description}</p>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>{announcement.date}</span>
                                <span>{announcement.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Previous Announcements Section */}
            <section>
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Previous Announcements</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {previousAnnouncementsData.map((announcement) => (
                        <div key={announcement.id} className="rounded-lg shadow-lg p-6 bg-teal-50">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{announcement.title}</h3>
                            <p className="text-gray-600 mb-4">{announcement.description}</p>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>{announcement.date}</span>
                                <span>{announcement.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Announcement;
