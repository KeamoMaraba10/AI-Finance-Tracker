import { SignIn } from "@clerk/nextjs";
import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 w-full h-1/2 md:h-full relative">
        <Image
          src="signInImage.jpg"
          alt="Sign In Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center p-5">
        <SignIn />
      </div>
    </div>
  );
}

export default page;