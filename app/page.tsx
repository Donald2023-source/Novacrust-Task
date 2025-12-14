import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="max-w-4xl p-5 flex items-center justify-center m-auto w-full h-screen  ">
      <div className="flex shadow-xl p-5  border rounded-xl w-full  h-full my-auto flex-col">
        <Navbar />
      </div>
    </div>
  );
}
