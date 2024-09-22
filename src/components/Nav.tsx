"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

function Nav() {
    const navigation=[
        {title:"Formations", path: '/'},
        {title:"Mentors", path: '/mentors'},
        {title:"Former ces équipes", path: '/former'},
        {title:"Financement", path: '/financement'},
    ]
    const pathName = usePathname()   

    return (
        <nav className="flex space-x-3 gap-3">
            {navigation.map((item) => (
            <Link key={item.path} href={item.path} className="group relative"> 
                <span className={`text-white  ${pathName === item.path ? 
                    "before:w-full before:content-[''] before:-bottom-3 before:bg-white before:h-[1px] before:absolute before:left-0"
                    :
                    "before:w-0 before:content-[''] before:-bottom-3 before:bg-white before:h-[1px] before:absolute before:left-0  before:transition-all group-hover:before:w-full duration-500"} `}></span>
                {item.title}
            </Link>
            ))}
        </nav>
  )
}

export default Nav