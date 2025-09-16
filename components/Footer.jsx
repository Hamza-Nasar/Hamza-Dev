export default function Footer() {
    return (
        <footer className="bg-gray-900 py-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Hamza — All rights reserved.</p>
            <div className="mt-2 space-x-4">
                <a href="https://github.com/hamzanaar114" className="hover:text-white">GitHub</a>
                <a href="https://linkedin.com/" className="hover:text-white">LinkedIn</a>
            </div>
        </footer>
    )
}
