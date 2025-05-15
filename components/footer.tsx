import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#131313] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="max-w-md md:justify-self-start">
            <div className="flex items-center mb-6">
              <Image
                src="/svgs/logo2.svg"
                alt="Guyversation Logo"
                width={200}
                height={200}
                className=""
              />
            </div>
            <h3 className="text-4xl leading-14 font-medium">
              The Safe Space for Boys to Talk, Learn, and Be Heard
            </h3>
          </div>

          <div className="md:justify-self-center">
            <h4 className="text-lg font-medium mb-12 text-white">Contact</h4>
            <ul className="space-y-6 font-light text-white">
              <li className="flex items-center">
                <a
                  href="mailto:hello@boysafrica.org"
                  className="hover:text-[#9c4dcc] transition-colors"
                >
                  hello@boysafrica.org
                </a>
              </li>
              <li className="flex items-center">
                <span>0703 7373 284</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9c4dcc] transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-lg font-medium mb-12 text-white">Socials</h4>
            <ul className="space-y-6 font-light text-white">
              <li className="flex items-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9c4dcc] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9c4dcc] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9c4dcc] transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#4F4F4F] text-center text-base text-[#F7F8FA]">
          Boys Quarters Africa ©2024 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
