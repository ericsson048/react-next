import Nav from "../Nav"


function Header() {
  return (
    <div className="flex  items-center justify-center w-full py-6 bg-[#1a1134] text-white">
        <h1 className="text-4xl  mr-32">next-level.<span className="text-emerald-400">run</span>()</h1>
        <Nav />
    </div>
  )
}

export default Header