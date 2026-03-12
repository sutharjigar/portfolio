import Navbar from "./navbar";
import Profile from "./profile";

export default function Common() {
  return (
    <div className="w-full mb-10">
      <Profile />
      <div className="mt-8" />
      <Navbar />
    </div>
  );
}
