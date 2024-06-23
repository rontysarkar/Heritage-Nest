import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className="px-4  divide-y dark:bg-gray-100 dark:text-gray-800 ">
            <div className="max-w-7xl  flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3 space-y-4">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                            <img src={logo} alt="" />
                        </div>

                    </a>
                    <h1 className="pr-16 ">Design amazing digital experiences that create more happy in the world.</h1>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-5">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
                        <ul className="space-y-1 font-semibold">
                            <li>
                                <a rel="noopener noreferrer" href="#">Overview</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Solutions</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Tutorials</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Releases</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
                        <ul className="space-y-1 font-semibold">
                            <li>
                                <a rel="noopener noreferrer" href="#">About us</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Careers</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Press</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">News</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Media kit</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-900">Resources</h3>
                        <ul className="space-y-1 font-semibold">
                            <li>
                                <a rel="noopener noreferrer" href="#">Blog</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Newsletter</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Events</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Help centre</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Tutorials</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-900">Social</h3>
                        <ul className="space-y-1 font-semibold">
                            <li>
                                <a rel="noopener noreferrer" href="#">Twitter</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">LinkedIn</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Facebook</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">GitHub</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">AngelList</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Dribbble</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3 ">
                        <h3 className="uppercase dark:text-gray-900">Legal</h3>
                        <ul className="space-y-1 font-semibold">
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Cookies</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Licenses</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Settings</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="max-w-7xl  mx-auto">
                <div className="space-y-3 flex justify-between">
                    <div className="py-6 text-sm text-center dark:text-gray-600 font-bold" >© 2024 Heritage- Nest . All rights reserved.</div>

                    <div className="flex justify-start space-x-3">


                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                            <FaTwitter className="text-2xl text-slate-500" />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                            <FaLinkedin className="text-2xl text-slate-500" />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                            <FaFacebook className="text-2xl text-slate-500" />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                            <FaGithub className="text-2xl text-slate-500" />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                            <svg width="16.682617" height="24.000000" viewBox="0 0 16.6826 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector" d="M14.1 10.09C14.65 8.56 16.23 4.14 16.23 2.73C16.23 1.48 15.5 0.44 14.18 0.44C12.09 0.44 10.22 6.61 9.63 8.08C9.18 6.75 7.05 0 5.17 0C3.72 0 3.03 1.07 3.03 2.42C3.03 4.07 4.64 8.36 5.22 10.01C4.92 9.9 4.6 9.81 4.28 9.81C3.18 9.81 2.02 11.17 2.02 12.28C2.02 12.69 2.25 13.28 2.39 13.67C0.66 14.14 0 15.29 0 17.03C-0.01 20.41 3.2 24 7.71 24C13.24 24 16.68 19.84 16.68 14.48C16.68 12.46 16.35 10.64 14.1 10.09ZM12.45 5.06C12.63 4.48 13.43 2.04 14.18 2.04C14.59 2.04 14.7 2.46 14.7 2.79C14.7 3.69 12.89 8.63 12.49 9.73L10.89 9.45L12.45 5.06ZM4.5 2.26C4.5 1.7 5.18 0.12 6.67 4.47L8.3 9.17C7.57 9.11 7 9.03 6.64 9.23C6.13 7.88 4.5 3.62 4.5 2.26ZM4.4 11.43C5.77 11.43 7.54 15.87 7.54 16.47C7.54 16.71 7.31 17 7.04 17C6.07 17 3.44 13.4 3.44 12.42C3.45 12.06 4.04 11.43 4.4 11.43ZM13.04 20.17C11.67 21.67 9.93 22.44 7.89 22.44C5.11 22.44 2.91 20.92 1.85 18.3C1.05 16.27 2.03 15.1 2.82 15.1C3.35 15.1 5.36 17.93 5.36 18.53C5.36 18.76 5 18.92 4.81 18.92C4.06 18.92 3.76 18.19 2.42 16.51C1.03 17.9 3.38 20.58 5.15 20.58C6.37 20.58 7.17 19.45 6.93 18.61C7.11 18.61 7.32 18.63 7.48 18.59C7.53 19.86 7.91 21.37 9.44 21.48C9.44 21.44 9.53 21.15 9.53 21.13C9.53 20.32 9.03 19.6 9.03 18.77C9.03 17.45 10.05 16.16 11.08 15.41C11.46 15.13 11.91 14.96 12.35 14.8C12.81 14.62 13.29 14.42 13.64 14.08C13.58 13.55 13.37 13.09 12.84 13.09C11.54 13.09 7.19 13.27 7.19 11.23C7.19 10.91 7.2 10.61 8.01 10.61C9.52 10.61 13.36 10.99 14.49 11.98C15.34 12.73 15.63 17.28 13.04 20.17ZM8.41 14.26C8.87 14.4 9.34 14.45 9.81 14.54C9.46 14.79 9.15 15.1 8.85 15.44C8.72 15.04 8.56 14.65 8.41 14.26Z" fill="#98A2B3" />
                            </svg>

                        </a>
                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                            <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.61 24 24 18.62 24 12C24 5.37 18.61 0 12 0ZM19.92 5.53C21.35 7.27 22.21 9.5 22.24 11.9C21.9 11.84 18.52 11.15 15.11 11.58C15.03 11.41 14.96 11.23 14.88 11.04C14.68 10.55 14.44 10.04 14.21 9.56C17.98 8.03 19.7 5.81 19.92 5.53ZM12 1.77C14.6 1.77 16.98 2.74 18.79 4.34C18.61 4.6 17.06 6.67 13.41 8.04C11.73 4.95 9.87 2.43 9.59 2.04C10.35 1.86 11.16 1.77 12 1.77ZM7.64 2.73C7.91 3.09 9.73 5.63 11.44 8.65C6.65 9.93 2.42 9.9 1.96 9.9C2.62 6.72 4.77 4.08 7.64 2.73ZM1.74 12.01C1.74 11.9 1.74 11.8 1.74 11.7C2.18 11.71 7.15 11.77 12.27 10.24C12.57 10.81 12.84 11.4 13.1 11.98C12.97 12.02 12.83 12.06 12.7 12.1C7.41 13.8 4.6 18.46 4.37 18.85C2.74 17.04 1.74 14.64 1.74 12.01ZM12 22.25C9.63 22.25 7.44 21.44 5.71 20.09C5.89 19.71 7.97 15.7 13.75 13.69C13.78 13.67 13.79 13.67 13.82 13.66C15.26 17.4 15.85 20.53 16 21.43C14.77 21.96 13.41 22.25 12 22.25ZM17.71 20.49C17.6 19.87 17.06 16.88 15.72 13.19C18.93 12.68 21.74 13.52 22.09 13.63C21.65 16.49 20.01 18.95 17.71 20.49Z" fill="#98A2B3" />
                            </svg>

                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;