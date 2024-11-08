// TEMPORARY DATA

export let role = "admin";

export const doctorsData = [
    {
        id: 1,
        teacherId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 2,
        teacherId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 3,
        teacherId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 4,
        teacherId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 5,
        teacherId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 6,
        teacherId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 7,
        teacherId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 8,
        teacherId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 9,
        teacherId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 10,
        teacherId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
    }
]

export const patientsData = [
    {
        id: 1,
        patientId: "P001",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "9876543210",
        address: "45 Oakwood Rd, Springville, USA",
        age: 30,
        gender: "Female",
        condition: "Diabetes",
        admissionDate: "2024-11-01",
        dischargeDate: "2024-11-10",
        doctorId: 1,  // Refers to John Doe
    },
    {
        id: 2,
        patientId: "P002",
        name: "Bob Martin",
        email: "bob.martin@example.com",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "9876543211",
        address: "12 Pine St, Oak Valley, USA",
        age: 45,
        gender: "Male",
        condition: "High Blood Pressure",
        admissionDate: "2024-10-28",
        dischargeDate: "2024-11-05",
        doctorId: 2,  // Refers to Jane Doe
    },
    {
        id: 3,
        patientId: "P003",
        name: "Catherine Smith",
        email: "catherine.smith@example.com",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "9876543212",
        address: "78 Willow Ave, Green City, USA",
        age: 60,
        gender: "Female",
        condition: "Asthma",
        admissionDate: "2024-11-03",
        dischargeDate: "2024-11-12",
        doctorId: 3,  // Refers to Mike Geller
    },
    {
        id: 4,
        patientId: "P004",
        name: "David Brown",
        email: "david.brown@example.com",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "9876543213",
        address: "123 Elm St, Lakeside, USA",
        age: 35,
        gender: "Male",
        condition: "Chronic Migraine",
        admissionDate: "2024-11-02",
        dischargeDate: "2024-11-08",
        doctorId: 4,  // Refers to Jay French
    },
    {
        id: 5,
        patientId: "P005",
        name: "Eve Williams",
        email: "eve.williams@example.com",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "9876543214",
        address: "56 Birch Rd, Sunset, USA",
        age: 28,
        gender: "Female",
        condition: "Pneumonia",
        admissionDate: "2024-11-04",
        dischargeDate: "2024-11-14",
        doctorId: 5,  // Refers to Jane Smith
    }
];

// TEMPORARY DATA for Announcements

export const announcementsData = [
    {
        id: 1,
        title: "Hospital Maintenance Notice",
        description: "The hospital will be undergoing scheduled maintenance on 20th November 2024. During this period, some services may be unavailable.",
        date: "Nov 20, 2024",
        time: "10:00 AM"
    },
    {
        id: 2,
        title: "New Visiting Hours",
        description: "The new visiting hours will start from 25th November 2024. Please check the updated schedule before visiting.",
        date: "Nov 25, 2024",
        time: "9:00 AM"
    },
    {
        id: 3,
        title: "Free Health Checkup Camp",
        description: "Join us for a free health checkup camp on 15th December 2024. Open to all patients.",
        date: "Dec 15, 2024",
        time: "9:00 AM"
    }
];

// TEMPORARY DATA for Previous Announcements

export const previousAnnouncementsData = [
    {
        id: 1,
        title: "Blood Donation Camp",
        description: "We are hosting a Blood Donation Camp on 10th November 2024. Join us to donate blood and save lives.",
        date: "Nov 10, 2024",
        time: "8:00 AM"
    },
    {
        id: 2,
        title: "Staff Training on Patient Care",
        description: "A mandatory staff training session on advanced patient care techniques will be held on 5th November 2024.",
        date: "Nov 05, 2024",
        time: "10:00 AM"
    },
    {
        id: 3,
        title: "Hospital New Year Party",
        description: "The hospital is organizing a New Year Party on 31st December 2024. All staff members are invited.",
        date: "Dec 31, 2024",
        time: "7:00 PM"
    },
    {
        id: 4,
        title: "Emergency Services Update",
        description: "Our emergency services will undergo updates from 15th December 2024, ensuring better facilities for the patients.",
        date: "Dec 15, 2024",
        time: "9:00 AM"
    },
    {
        id: 5,
        title: "Hospital Renovation Notice",
        description: "Renovations will begin on the 20th of November and will continue through to 25th December 2024. Some areas of the hospital may be closed.",
        date: "Nov 20, 2024",
        time: "8:00 AM"
    },
    {
        id: 6,
        title: "Healthcare Awareness Week",
        description: "Join us for a week-long event from 1st December 2024 to raise awareness about healthcare and wellness.",
        date: "Dec 01, 2024",
        time: "10:00 AM"
    }
];

export const healthEventsData = [
    {
        title: "Yoga Session",
        allDay: false,
        start: new Date(2024, 10, 7, 8, 0),
        end: new Date(2024, 10, 7, 8, 45),
    },
    {
        title: "Cardio Workshop",
        allDay: false,
        start: new Date(2024, 10, 7, 9, 0),
        end: new Date(2024, 10, 7, 9, 45),
    },
    {
        title: "Nutritional Counseling",
        allDay: false,
        start: new Date(2024, 10, 7, 10, 0),
        end: new Date(2024, 10, 7, 10, 45),
    },
    {
        title: "Meditation Session",
        allDay: false,
        start: new Date(2024, 10, 7, 11, 0),
        end: new Date(2024, 10, 7, 11, 45),
    },
    {
        title: "Diabetes Screening",
        allDay: false,
        start: new Date(2024, 10, 7, 13, 0),
        end: new Date(2024, 10, 7, 13, 45),
    },
    {
        title: "Blood Pressure Check",
        allDay: false,
        start: new Date(2024, 10, 7, 14, 0),
        end: new Date(2024, 10, 7, 14, 45),
    },
    {
        title: "Mental Health Workshop",
        allDay: false,
        start: new Date(2024, 10, 8, 9, 0),
        end: new Date(2024, 10, 8, 9, 45),
    },
    {
        title: "Cholesterol Screening",
        allDay: false,
        start: new Date(2024, 10, 8, 10, 0),
        end: new Date(2024, 10, 8, 10, 45),
    },
    {
        title: "Yoga Session",
        allDay: false,
        start: new Date(2024, 10, 9, 8, 0),
        end: new Date(2024, 10, 9, 8, 45),
    },
    {
        title: "Cardio Workshop",
        allDay: false,
        start: new Date(2024, 10, 9, 9, 0),
        end: new Date(2024, 10, 9, 9, 45),
    },
    {
        title: "Mental Health Workshop",
        allDay: false,
        start: new Date(2024, 10, 9, 11, 0),
        end: new Date(2024, 10, 9, 11, 45),
    },
    {
        title: "Nutrition Seminar",
        allDay: false,
        start: new Date(2024, 10, 10, 13, 0),
        end: new Date(2024, 10, 10, 13, 45),
    },
    {
        title: "Pilates Class",
        allDay: false,
        start: new Date(2024, 10, 10, 14, 0),
        end: new Date(2024, 10, 10, 14, 45),
    },
    {
        title: "Aerobics Session",
        allDay: false,
        start: new Date(2024, 10, 11, 9, 0),
        end: new Date(2024, 10, 11, 9, 45),
    },
    {
        title: "Cholesterol Screening",
        allDay: false,
        start: new Date(2024, 10, 11, 10, 0),
        end: new Date(2024, 10, 11, 10, 45),
    },
    {
        title: "Yoga Session",
        allDay: false,
        start: new Date(2024, 10, 12, 8, 0),
        end: new Date(2024, 10, 12, 8, 45),
    },
    {
        title: "Cardio Workshop",
        allDay: false,
        start: new Date(2024, 10, 12, 9, 0),
        end: new Date(2024, 10, 12, 9, 45),
    },
    {
        title: "Mental Health Workshop",
        allDay: false,
        start: new Date(2024, 10, 13, 11, 0),
        end: new Date(2024, 10, 13, 11, 45),
    },
    {
        title: "Nutrition Seminar",
        allDay: false,
        start: new Date(2024, 10, 13, 13, 0),
        end: new Date(2024, 10, 13, 13, 45),
    },
    {
        title: "Blood Pressure Check",
        allDay: false,
        start: new Date(2024, 10, 14, 14, 0),
        end: new Date(2024, 10, 14, 14, 45),
    },
];


