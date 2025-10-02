const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Shanthi Nagar Services. All rights reserved.</p>
                <p>Contact us: info@shanthinagarservices.com</p>
            </div>
        </footer>
    );
};

export default Footer;