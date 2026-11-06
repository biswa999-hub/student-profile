
import { useState } from 'react';
import student1 from "../assets/images/b-student3.jpg";
import priyaImg from '../assets/images/g-student-2.jpeg';
import amitImg from '../assets/images/b-student5.jpg';

function StudentProfile() {

    // Active Squad State
    const [activeSquad, setActiveSquad] = useState('All');

    // Student Dummy Data
    const students = [
        {
            id: 1,
            name: 'Rahul Sharma',
            squad: 'Squad A',
            email: 'rahul@gmail.com',
            image: student1,
            about: 'Creative and passionate student. Loves learning new technologies and building projects.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 2,
            name: 'Priya Singh',
            squad: 'Squad B',
            email: 'priya@gmail.com',
            image: priyaImg,
            about: 'Friendly and enthusiastic learner. Interested in design, creativity and teamwork.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 3,
            name: 'Amit Kumar',
            squad: 'Squad A',
            email: 'amit@gmail.com',
            image: amitImg,
            about: 'Technology enthusiast who enjoys coding and solving challenging problems.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 4,
            name: 'Sneha Das',
            squad: 'Squad C',
            email: 'sneha@gmail.com',
            image: 'https://i.pravatar.cc/300?img=44',
            about: 'A motivated student with a passion for communication and creative thinking.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 5,
            name: 'Arjun Patel',
            squad: 'Squad D',
            email: 'arjun@gmail.com',
            image: 'https://i.pravatar.cc/300?img=14',
            about: 'Hardworking learner interested in software development and modern technology.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 6,
            name: 'Ananya Roy',
            squad: 'Squad B',
            email: 'ananya@gmail.com',
            image: 'https://i.pravatar.cc/300?img=45',
            about: 'Creative thinker who loves collaborating with others and learning new skills.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 7,
            name: 'Rohan Verma',
            squad: 'Squad E',
            email: 'rohan@gmail.com',
            image: 'https://i.pravatar.cc/300?img=15',
            about: 'Curious student exploring web development and innovative digital solutions.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 8,
            name: 'Neha Gupta',
            squad: 'Squad C',
            email: 'neha@gmail.com',
            image: 'https://i.pravatar.cc/300?img=48',
            about: 'Positive and dedicated learner with an interest in technology and design.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 9,
            name: 'Karan Mehta',
            squad: 'Squad D',
            email: 'karan@gmail.com',
            image: 'https://i.pravatar.cc/300?img=16',
            about: 'Problem solver who enjoys programming and working on exciting projects.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 10,
            name: 'Pooja Sharma',
            squad: 'Squad A',
            email: 'pooja@gmail.com',
            image: 'https://i.pravatar.cc/300?img=49',
            about: 'An enthusiastic student who enjoys learning, sharing ideas and teamwork.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 11,
            name: 'Vikram Singh',
            squad: 'Squad E',
            email: 'vikram@gmail.com',
            image: 'https://i.pravatar.cc/300?img=17',
            about: 'Passionate about technology, coding and developing practical solutions.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        },
        {
            id: 12,
            name: 'Meera Joshi',
            squad: 'Squad B',
            email: 'meera@gmail.com',
            image: 'https://i.pravatar.cc/300?img=46',
            about: 'A dedicated learner interested in creative projects and personal development.',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/'
        }
    ];

    // Squad Filter
    const filteredStudents = activeSquad === 'All'
        ? students
        : students.filter((student) => student.squad === activeSquad);

    // Squad Buttons
    const squads = ['All', 'Squad A', 'Squad B', 'Squad C', 'Squad D', 'Squad E'];

    return (
        <section className="student-section py-5">

            <div className="container">

                {/* Section Heading */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Our Students</h2>
                    <p className="text-muted">
                        Meet our talented students from different squads.
                    </p>
                </div>

                {/* Squad Filter Buttons */}
                <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">

                    {squads.map((squad) => (
                        <button
                            key={squad}
                            type="button"
                            className={`btn ${
                                activeSquad === squad
                                    ? 'btn-primary'
                                    : 'btn-outline-primary'
                            }`}
                            onClick={() => setActiveSquad(squad)}
                        >
                            {squad}
                        </button>
                    ))}

                </div>

                {/* Student Count */}
                <div className="mb-3">
                    <h6 className="text-muted">
                        Showing {filteredStudents.length} Students
                    </h6>
                </div>

                {/* Student Cards */}
                <div className="row g-4">

                    {filteredStudents.map((student) => (

                        <div className="col-lg-3 col-md-4 col-sm-6" key={student.id}>

                            <div className="card h-100 border-0 shadow-sm student-card">

                                {/* Student Image */}
                                <img
                                    src={student.image}
                                    className="card-img-top"
                                    alt={student.name}
                                    style={{
                                        height: '220px',
                                        objectFit: 'cover'
                                    }}
                                />

                                <div className="card-body text-center d-flex flex-column">

                                    {/* Squad Badge */}
                                    <span className="badge bg-primary align-self-center mb-2">
                                        {student.squad}
                                    </span>

                                    {/* Student Name */}
                                    <h5 className="fw-bold mb-1">
                                        {student.name}
                                    </h5>

                                    {/* Email */}
                                    <p className="text-muted small mb-2">
                                        {student.email}
                                    </p>

                                    {/* About Us */}
                                    <p className="text-secondary small">
                                        {student.about}
                                    </p>

                                    {/* Social Links */}
                                    <div className="mt-auto pt-2 border-top">

                                        <a
                                            href={student.facebook}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-sm btn-outline-primary me-2"
                                        >
                                            Facebook
                                        </a>

                                        <a
                                            href={student.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            LinkedIn
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default StudentProfile;
