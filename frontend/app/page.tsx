import Link from "next/link";
import Image from "next/image";
import Carousel from "./components/carousel";
import CarCarousel from "./components/carousel2";

const ArrowLeftIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.71 18.29l-1.42 1.42L5.59 12l7.7-7.71 1.42 1.42L8.41 12l6.3 6.29z" /></svg>
);
const ArrowRightIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9.29 18.29l1.42 1.42L18.41 12l-7.7-7.71-1.42 1.42L15.59 12l-6.3 6.29z" /></svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-800 text-white font-['Be_Vietnam_Pro']">
      <main className="overflow-hidden">
        <Carousel />
        <section className="max-w-3xl mx-auto p-8 py-16 md:py-24">
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-8 text-white">
            Greetings! We Are <span className="text-cyan-400">Iswarayana Team</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 text-base lg:text-lg text-gray-300">
            <p>
              Iswarayana is an independent racing team, born from the University of Ferrari, dedicated to pushing the boundaries of high-performance racing machines that blend cutting-edge design, strategy, and pure speed.
            </p>
            <p>
              Since 2006, we have evolved from a passionate student project into one of the most respected contenders on the circuit. With a series of podium wins, radical innovations, and a relentless drive, we ride as a championship contender.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href="/models" className="text-cyan-400 text-2xl font-semibold hover:underline">
              Discover Our Models
            </Link>
            <div className="mt-4">
              <CarCarousel />
            </div>
          </div>
        </section>
        

        <section className="bg-cyan-400 text-[#FFFAFF] p-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl font-bold mb-12">Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">

              <Link href="/achievements/1" className="group relative block rounded-lg h-72 overflow-hidden">
                <Image src="/achievement1.png" alt="Achievement 1" fill className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-cyan-400 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-base font-bold">WEFERROUD: Bring Back Gold, Iswarayana Racing Team Dominate Circuit of Mandalika Global Racing Competition</p>
                </div>
              </Link>

              <Link href="/achievements/1" className="group relative block rounded-lg h-72 overflow-hidden">
                <Image src="/achievement2.png" alt="Achievement 2" fill className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-cyan-400 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-base font-bold">WEFERROUD: Iswarayana Racing Team Clear Swipes Multiple Division on International Racing Competition </p>
                </div>
              </Link>

              <div className="group relative block rounded-lg h-72 overflow-hidden">
                <Image src="/achievement3.png" alt="Achievement 3" fill className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-cyan-400 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-base font-bold">WEFERROUD: Not Two, But Three Grand Champions in A Row. Iswarayana Set the Best Team on Asia-Pasific </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto p-8 py-16 md:py-24 ">
          <h2 className="text-center sm:2xl md:3xl lg:text-4xl font-bold mb-12">Explore our Merch Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="hover:text-cyan-400 transition-all">
              <div className="mx-auto rounded-full bg-[#FFFAFF] w-52 h-52 lg:w-[250px] lg:h-[250px]">
                <Image src="/cap-png.png" alt="Racing Cap" width={176} height={176} className="lg:w-52 lg:h-52 transition-transform duration-300 ease-in-out hover:-translate-y-8  object-cover mx-auto mb-4" />
              </div>
              <h3 className="font-semibold text-lg mt-4">Racing Team Cap</h3>
            </div>
            <div className="mx-auto hover:text-cyan-400 transition-colors">
              <div className="rounded-full bg-[#FFFAFF] w-52 h-52 lg:w-[250px] lg:h-[250px]">
                <Image src="/t-shirt-copy.png" alt="Racing T-Shirt" width={184} height={184} className="lg:w-52 lg:h-52 transition-transform duration-300 ease-in-out hover:-translate-y-8 object-cover mx-auto mb-4" />
              </div>
              <h3 className="font-semibold text-lg mt-4">Racing Team T-Shirt</h3>
            </div>
            <div className="mx-auto hover:text-cyan-400 transition-colors">
              <div className="rounded-full bg-[#FFFAFF] w-52 h-52 lg:w-[250px] lg:h-[250px]">
                <Image src="/jacket-copy.png" alt="Racing Jacket" width={144} height={144} className="lg:w-44 lg:h-56 transition-transform duration-300 ease-in-out hover:-translate-y-8 object-cover mx-auto mb-4" />
              </div>
              <h3 className="font-semibold text-lg mt-4">Racing Team Jacket</h3>
            </div>
            <div className="mx-auto hover:text-cyan-400 transition-colors">
              <div className="rounded-full bg-[#FFFAFF] w-52 h-52 lg:w-[250px] lg:h-[250px]">
                <Image src="/tumbler-copy.png" alt="Racing Tumbler" width={176} height={176} className="lg:w-48 lg:h-48 transition-transform duration-300 ease-in-out hover:-translate-y-8 object-cover mx-auto mb-4" />
              </div>
              <h3 className="font-semibold text-lg mt-4">Racing Team Tumbler</h3>
            </div>
          </div>
          <div className="flex mt-12 justify-end">
            <Link href="/product" className="group flex items-center gap-3 text-xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
              <p>Discover more</p>
              <span className="md:right-12 top-4 border-4 border-white/75 hover:border-transparent hover:bg-cyan-400 p-2 rounded-full text-white transition-all">
                <ArrowRightIcon className="w-6 h-6 md:w-8 md:h-8" />
              </span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}