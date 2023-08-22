import { FaFigma, FaFreeCodeCamp } from "react-icons/fa";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className={`w-full text-center space-y-2 `}>
      <ul className="flex items-center justify-center text-2xl gap-3 p-5">
        <li>
          <Link
            href={"https://twitter.com/omegaStrikes"}
            target="_blank"
            className="border border-transparent hover:border-white"
          >
            <BsTwitter />
          </Link>
        </li>
        <li>
          <Link
            href={"https://linkedin.com/in/baliram-singh"}
            target="_blank"
            className="border border-transparent hover:border-white"
          >
            <BsLinkedin />
          </Link>
        </li>
        <li>
          <Link
            href={"https://freecodecamp.com/ome9a"}
            target="_blank"
            className="border border-transparent hover:border-white"
          >
            <FaFreeCodeCamp />
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.figma.com/@ome9a"}
            target="_blank"
            className="border border-transparent hover:border-white"
          >
            <FaFigma />
          </Link>
        </li>
      </ul>

      <p className="py-2">
        Designed and developed by <strong>Baliram Singh</strong> (OMEGA)
      </p>
    </footer>
  );
}

export default Footer;
