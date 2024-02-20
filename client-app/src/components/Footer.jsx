import { Footer, FooterDivider } from "flowbite-react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Omkar's
              </span>
              Blog
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
          <div className="">
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://omkar2310.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Omkar's Portfolio
              </Footer.Link>
              <Footer.Link
                href="https://www.linkedin.com/in/omkarmankar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="">
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://www.github.com/omkar2310"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Footer.Link>
              <Footer.Link
                href="https://www.linkedin.com/in/omkarmankar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="">
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <FooterDivider />
        <div className="text-center md:flex justify-between">
          <Footer.Copyright
            href="#"
            by="Omkar's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex justify-center gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={FaFacebook} />
            <Footer.Icon href="#" icon={FaLinkedin} />
            <Footer.Icon href="#" icon={FaTwitter} />
            <Footer.Icon href="#" icon={FaGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
