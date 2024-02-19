import { ToastContainer, toast } from "react-toastify";
import { googleLogo, githubLogo } from "../assets/index";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/productsSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-green-600 cursor-pointer duration-300"
        >
          <img className="w-8" src={googleLogo} alt="google logo" />
          <span className="font-bold text-gray-700">Sing in with Google</span>
        </div>
        <button
          onClick={handleSingOut}
          className="text-base w-40 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-red-600 cursor-pointer duration-300"
        >
          Sing Out
        </button>
      </div>

      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img className="w-8" src={githubLogo} alt="github logo" />

          <span className="font-bold text-gray-700">Sing in with Github</span>
        </div>
        <button className="text-base w-40 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-red-600 cursor-pointer duration-300">
          Sing Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Login;
