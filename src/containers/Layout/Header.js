// import { useAuth, useAuthActions } from "@/context/AuthContext";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signout } from "./../../redux/user/userActions";

const Header = () => {
  // const { user, loading } = useAuth();
  // const dispatch = useAuthActions();
  const userInfo = useSelector((state) => state.userSignin);
  const { user, loading } = userInfo;
  const dispatch = useDispatch();
  return (
    <header className="bg-white shadow-md py-2 mb-8 sticky top-0 z-40">
      <div
        className={`container mx-auto xl:max-w-screen-xl transition-all ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href={"/"}>
                <a className="py-2 block">Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/blogs"}>
                <a className="py-2 block">Blogs</a>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <button
                  className="bg-red-600 px-2 py-1 rounded text-red-100"
                  onClick={() => dispatch(signout())}
                >
                  خروج
                </button>
                <Link href={"/profile"}>
                  <a className="py-2 block">Profile</a>
                </Link>
              </>
            ) : (
              <>
                <Link href={"/signup"}>
                  <a className="py-2 block">ثبت نام</a>
                </Link>
                <Link href={"/signin"}>
                  <a className="py-2 block">ورود</a>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
