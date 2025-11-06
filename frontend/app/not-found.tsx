import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-zinc-900 text-white flex items-center justify-center text-center p-8 font-sans overflow-hidden">

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <Image 
          src="/flat-tire.png" 
          alt="Iswarayana Logo Watermark" 
          width={400} 
          height={400}
          className="opacity-10" 
        />
      </div>


      <div className="relative z-10 max-w-md"> 

        <h1 className="text-6xl md:text-9xl font-bold text-cyan-400">
          404
        </h1>
        <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-base lg:text-lg text-gray-400">
          Looks like you missed a turn. The page you're looking for is under construction or has been moved.
        </p>

        <Link 
          href="/"
          className="
            mt-12 inline-block px-8 py-3 
            bg-cyan-400 text-zinc-900 
            font-bold md:text-base lg:text-lg rounded-md lg:rounded-lg 
            hover:bg-cyan-300 transition-all ease-in-out
            focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-900
          "
        >
          Back to The Paddock
        </Link>
        
      </div>
    </div>
  );
}