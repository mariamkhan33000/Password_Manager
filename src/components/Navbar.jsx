

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
        <div className="mycontainer flex items-center justify-around py-5 px-4 h-14">
        <div className="logo font-bold text-2xl" >
           <span className="text-green-500">&lt;</span>
            Pass
            <span className="text-green-500">OP/&gt;</span>
            </div>
        <ul>
            <li className="flex gap-4">
                <a className="hover:font-bold" href="#">Home</a>
                <a className="hover:font-bold" href="#">About</a>
                <a className="hover:font-bold" href="#">Contact</a>
            </li>
        </ul>
        <div>
            <button className="flex items-center gap-4 cursor-pointer bg-green-800 px-4 py-2 rounded-full hover:bg-green-500">
            <img className="h-6 invert "  src="icons/github.png" alt="github logo" />GitHub
            </button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar