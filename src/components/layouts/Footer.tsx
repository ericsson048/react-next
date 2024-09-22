import Image from "next/image";
import Link from "next/link";

const logo ="https://www.metron.energy/wp-content/uploads/2023/06/LogoQualiopi-300dpi-Avec-Marianne.png.webp";

function Footer() {
  return (
    <footer className='w-full bg-[#1a1134] text-white font-thin text-sm flex-col justify-center space-y-3 pt-3 pb-10 px-24 '>
        <div className='w-full bg-white h-[1px]'></div>
        <div className='w-full flex flex-row justify-center h-[150px]'>
            <div className="flex justify-center relative w-[30%] h-full">
            <Image src={logo} alt="logo" fill className="object-cover" />
            </div>
            <div className="flex justify-between w-[70%] px-3">
                <div className="flex flex-col justify-between m-0 gap-3 flex-1">
                    <p className="flex flex-col text-start">NextLevelRun est un organisme de formation certifié Qualiopi - Numéro d&apos;activité <span>11756807975</span></p>
                    <p className="flex flex-col text-start">stan@next-level.run <span>06 63 31 86 90</span></p>
                </div>
                <nav className="flex flex-col justify-between px-10 flex-1">
                    <Link href={"/"}>Formations</Link>
                    <Link href={"/"}>Mentors&amp; Coaches</Link>
                    <Link href={"/"}>Méthode</Link>
                    <Link href={"/"}>Financements</Link>
                    <Link href={"/"}>À propos</Link>
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
