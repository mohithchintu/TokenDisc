import React from "react";
import logo from '../assets/logo_token.svg';
import Image from "next/image";

function Footer() {
    return (
        <div className=" min-h-[60vh] max-w-screen bg-[#99CAB7]">
            <div className="grid grid-cols-3 gap-5 space-x-5 px-20">
                <div className="space-y-7 py-20">
                    <div>
                        <Image src={logo} alt="" />
                    </div>
                    <p className="text-justify text-black">
                    TOKEN-DISC is the ultimate exchange that educates, empowers, and
enhances the concepts of crypto-currency / blockchain which will transform this
space into a mainstream asset class for investments, savings, and trading.{" "}
                    </p>
                    <p  className="text-black">
                        Sign up to get the latest in Token Disc news, discounts, and more.
                    </p>

                    <form>
                        <label>
                            <input
                                className=" border border-black placeholder-black  rounded-md text-black p-3"
                                type="text"
                                placeholder="Enter your email"
                            ></input>
                        </label>
                    </form>
                    <p className="text-black text-xs">
                        © 2021 GleeDesign holdings, Token Disc
                    </p>
                </div>
                <div className="py-20 px-20">
                    <ul className="list-none space-y-5 text-black">
                        <li className="font-bold text-sm ">Company</li>
                        <li>About</li>
                        <li>News</li>
                        <li>Support</li>
                        <li>FAQ&apos;s</li>
                        
                    </ul>
                </div>
                <div className="py-20 px-20">
                    <ul className="list-none space-y-5 text-black">
                        <li className="font-bold text-sm whitespace-nowrap text-black">
                            Privacy Policy & Terms of Service
                        </li>
                        <li className="whitespace-nowrap">Token Disc Privacy Policy</li>
                        <li className="whitespace-nowrap">
                            {" "}
                            Token Disc Biometrics Privacy Policy{" "}
                        </li>
                        <li className="whitespace-nowrap">
                            Token Disc Financial Privacy Notice
                        </li>
                        <li className="whitespace-nowrap">Token Disc Terms of Service</li>
                        <li className="whitespace-nowrap">
                            Token Disc Trade Desk Terms of Service
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;