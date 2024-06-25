import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
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
                            <FaTwitter className="text-2xl text-blue-600" />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                            <FaLinkedin className="text-2xl text-blue-600" />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                            <FaFacebook className="text-2xl text-blue-600" />
                        </a>

                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1 text-blue-600">
                            <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7705 10.0969C15.319 8.56875 16.8986 4.14844 16.8986 2.73281C16.8986 1.48594 16.1627 0.440625 14.8502 0.440625C12.7596 0.440625 10.8846 6.61406 10.2986 8.08594C9.84395 6.75 7.71583 0 5.84083 0C4.38301 0 3.69864 1.07344 3.69864 2.42344C3.69864 4.07812 5.30176 8.36719 5.88301 10.0172C5.5877 9.90938 5.26895 9.81562 4.94551 9.81562C3.84864 9.81562 2.68145 11.1797 2.68145 12.2812C2.68145 12.6984 2.91114 13.2844 3.05645 13.6734C1.32676 14.1422 0.661138 15.2953 0.661138 17.0344C0.65645 20.4187 3.8627 24 8.37208 24C13.9033 24 17.344 19.8469 17.344 14.4891C17.344 12.4688 17.0205 10.6453 14.7705 10.0969ZM13.1111 5.0625C13.2986 4.48594 14.1002 2.04844 14.8502 2.04844C15.2533 2.04844 15.3611 2.46563 15.3611 2.79844C15.3611 3.69375 13.5518 8.63906 13.1533 9.73594L11.5596 9.45469L13.1111 5.0625ZM5.17051 2.26406C5.17051 1.70625 5.8502 0.121875 7.34083 4.47188L8.9627 9.17344C8.23145 9.1125 7.66426 9.03281 7.30333 9.23906C6.79239 7.88906 5.17051 3.62812 5.17051 2.26406ZM5.0627 11.4375C6.43614 11.4375 8.20801 15.8719 8.20801 16.4719C8.20801 16.7109 7.97833 17.0062 7.71114 17.0062C6.73145 17.0062 4.10645 13.4016 4.10645 12.4266C4.11114 12.0656 4.70176 11.4375 5.0627 11.4375ZM13.7018 20.1703C12.3377 21.6703 10.594 22.4484 8.55958 22.4484C5.7752 22.4484 3.57676 20.9203 2.51739 18.3094C1.71583 16.275 2.69551 15.1078 3.48301 15.1078C4.01739 15.1078 6.02833 17.9344 6.02833 18.5344C6.02833 18.7641 5.66739 18.9234 5.47989 18.9234C4.7252 18.9234 4.42989 18.1969 3.08458 16.5141C1.69239 17.9062 4.04551 20.5875 5.81739 20.5875C7.04083 20.5875 7.8377 19.4531 7.59864 18.6188C7.77208 18.6188 7.9877 18.6328 8.14708 18.5906C8.19864 19.8609 8.57364 21.375 10.1018 21.4828C10.1018 21.4406 10.1955 21.15 10.1955 21.1359C10.1955 20.3203 9.69864 19.6078 9.69864 18.7781C9.69864 17.4516 10.7158 16.1672 11.7471 15.4172C12.1221 15.1359 12.5768 14.9625 13.0174 14.8031C13.4721 14.6297 13.9549 14.4281 14.3018 14.0812C14.2502 13.5562 14.0346 13.0922 13.5096 13.0922C12.2111 13.0922 7.85645 13.2797 7.85645 11.2313C7.85645 10.9172 7.86114 10.6172 8.67208 10.6172C10.1861 10.6172 14.0299 10.9922 15.1549 11.9813C16.0033 12.7359 16.294 17.2875 13.7018 20.1703ZM9.07989 14.2641C9.53458 14.4094 10.0033 14.4516 10.4721 14.5453C10.1252 14.7984 9.81583 15.1078 9.52051 15.4406C9.38926 15.0422 9.22989 14.6531 9.07989 14.2641Z" fill="#0059B1" />
                            </svg>


                        </a>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;