import { BsGithub } from "react-icons/bs";

import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <nav className='fixed top-0 p-5 w-full overflow-hidden flex justify-between items-center'>
      <h1 className={`text-2xl font-[500]`}>FCC Calculator</h1>
      <Link href={"https://github.com/0me9a"} target='_blank' className={`text-2xl hover:text-violet-300`}>
        <BsGithub/>
      </Link>
    </nav>
  )
}

export default Nav