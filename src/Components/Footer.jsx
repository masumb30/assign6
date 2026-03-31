import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 ">
            <div className="max-w-300 mx-auto px-4 py-12">

                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

                    {/* Brand / Description */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold">Digitools</h3>
                        <p className="text-gray-600 mt-3 text-sm max-w-md">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold mb-3">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-black cursor-pointer">Features</li>
                            <li className="hover:text-black cursor-pointer">Pricing</li>
                            <li className="hover:text-black cursor-pointer">Templates</li>
                            <li className="hover:text-black cursor-pointer">Integrations</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-3">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-black cursor-pointer">About</li>
                            <li className="hover:text-black cursor-pointer">Careers</li>
                            <li className="hover:text-black cursor-pointer">Press</li>
                            <li className="hover:text-black cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-3">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-black cursor-pointer">Documentation</li>
                            <li className="hover:text-black cursor-pointer">Blog</li>
                            <li className="hover:text-black cursor-pointer">Help Center</li>
                            <li className="hover:text-black cursor-pointer">Community</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Social LInks</h4>
                        <ul className="space-y-2 text-lg text-white  flex gap-3 ">
                            <li><FaFacebook />
                            </li>
                            <li><FaInstagramSquare />
                            </li>
                            <li><FaSquareXTwitter />
                            </li>

                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

                    {/* Copyright */}
                    <p>© 2026 Digitools. All rights reserved.</p>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="hover:text-black cursor-pointer">
                            Privacy Policy
                        </span>
                        <span className="hover:text-black cursor-pointer">
                            Terms of Service
                        </span>
                        <span className="hover:text-black cursor-pointer">
                            Cookies
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;