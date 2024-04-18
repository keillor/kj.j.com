import Image from "next/image";
import Navbar from "./components/navbar";
import KJLogo from "./components/kj_logo";

export default function Home() {
  return (
    <>
      <Navbar />
      <p className='flex justify-center text-white '>Hi! My name is</p>
      <div className='flex justify-center'>
        <KJLogo height={500} animated={true}/>
      </div>
      
    </>
  );
}
