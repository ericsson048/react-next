import Link from "next/link";

interface ButtomProps {
  name: string;
  link:string
}

function ButtomCard({ name,link }: ButtomProps) {
  return (
    <Link href={link} className="w-[75%] bg-yellow-500 border-none py-3  text-center rounded cursor-pointer duration-300 shadow-bttom" >{name}</Link>
  )
}

export default ButtomCard