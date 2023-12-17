import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo1.png";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session }: { data: any } = useSession();
  const route = useRouter();
  console.log(route);

  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={180} height={180} src={logo} alt="logoDark" />
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
            <Link
              className={route.pathname == "/" ? "text-secondaryColor" : ""}
              href="/"
            >
              Home
            </Link>
            <Link
              className={
                route.pathname == "/posts" ? "text-secondaryColor" : ""
              }
              href="/posts"
            >
              Posts
            </Link>
            <Link
              className={route.pathname == "/page" ? "text-secondaryColor" : ""}
              href="/pages"
            >
              Pages
            </Link>

            <Link
              className={
                route.pathname == "/photography" ? "text-secondaryColor" : ""
              }
              href="/photography"
            >
              Photography
            </Link>
            <Link
              className={
                route.pathname == "/contact" ? "text-secondaryColor" : ""
              }
              href={"/contact"}
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full bg-"
              src={
                session
                  ? session?.user!.image
                  : "https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
              }
              alt="logo"
            />
            <p className="text-sm font-medium">
              {session ? session?.user.name : "Hello Stranger!"}
            </p>
          </div>

          {session ? (
            <button
              onClick={() => signOut()}
              className="uppercase lg:text-sm text-xs border-[1px] border-bgColor border-secondaryColor lg:px-4 px-2 py-1 font-semibold text-white rounded-md bg-secondaryColor transition-all duration-300 active:bg-yellow-600"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="uppercase lg:text-sm text-xs border-[1px] border-primaryColor hover:border-secondaryColor lg:px-4 px-2 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
