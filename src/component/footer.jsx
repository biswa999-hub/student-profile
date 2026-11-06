
function Footer() {
    return (
        <footer className="bg-primary text-white py-3 mt-5">
            <div className="container text-center">
                <p className="mb-0">
                    © {new Date().getFullYear()} Student Profile. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
