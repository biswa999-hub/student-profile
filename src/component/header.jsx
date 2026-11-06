
function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">

                    {/* Logo */}
                    <a className="navbar-brand fw-bold fs-4" href="/">
                        Student Profile
                    </a>

                    {/* Mobile Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Menu */}
                    <div className="collapse navbar-collapse" id="mainNavbar">

                        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/students">
                                    Students
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    Contact
                                </a>
                            </li>

                            {/* Login Button */}
                            <li className="nav-item">
                                <a className="btn btn-light text-primary fw-semibold px-4 mt-2 mt-lg-0" href="/login">
                                    Login User
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
