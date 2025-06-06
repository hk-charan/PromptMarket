"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";

const Nav = () => {
  const {data:session} = useSession()

    const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  console.log(session?.user.name)

   useEffect(() => {
   const setUpProviders =  async () => {
      const res = await getProviders();
      setProviders(res);
    }

    setUpProviders();
  }, []);

  return (
    <nav className="w-full flex justify-between p-3 md:p-5 ">
      <Link href="/" className="text md:text-xl font-bold">
        PromptMarket
      </Link>

      {/* Desktop version */}
      <div className="sm:flex text-sm items-center hidden gap-5">
        {session?.user ? (
          <>
            <Link
              href="/create-prompt"
              className="px-5 py-2 border border-white/10 rounded-full bg-cyan-500"
            >
              Create Post
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="px-5 py-2 backdrop-blur-sm cursor-pointer hover:bg-red-500 bg-white/5 border border-white/10 rounded-full"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full cursor-pointer"
                alt="profile"
              />
            </Link>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* mobile version */}

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <>
            <div className="flex flex-col items-end gap-1 ">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full bg-amber-400 cursor-pointer"
                alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
              />

              {
                toggleDropdown && (
                    <div className="flex text-sm  flex-col items-center bg-white/5 backdrop-blur-3xl border border-white/10 rounded-lg absolute right-0 top-full mt-3 w-full p-3  min-w-[210px]  gap-3 justify-end z-50">
                <Link href={"/profile"} onClick={()=> {setToggleDropdown(false)}} className="cursor-pointer">Profile</Link>

                <Link href="/create-prompt" onClick={() => {
                  setToggleDropdown(false)
                }} className="text-base text-cyan-500 cursor-pointer">
                  Create Post
                </Link>
                <button
                  type="button"
                  onClick={()=>{
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="cursor-pointer hover:text-red-500"
                  
                >
                  Sign Out
                </button>
              </div>
                )
              }
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
