import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const Manager = () => {
    const ref = useRef()

    const [form, setForm] = useState({
        site: "",
        username: "",
        password: ""
    })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passsword = localStorage.getItem("password")
        if(passsword) {
            setPasswordArray(JSON.parse(passsword))
        }
    },[])

    const showPassword = () => {
        if(ref.current.src.includes("icons/crosseye.png")) {
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/crosseye.png"
        }
    }

    const savePassword = () => { 
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log(passwordArray)
     }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
    <div className="mycontainer">
    <div className="logo font-bold text-2xl text-center" >
           <span className="text-green-700">&lt;</span>
            Pass
            <span className="text-green-700">OP/&gt;</span>
            </div>
        <p className="text-green-600 text-lg text-center">Your Own Password Manager</p>
        <div className="text-white flex flex-col p-4 gap-5">

            <input className="rounded-full border border-green-500 outline-none w-full p-4 py-1 text-black" type="text" name="site" id="" placeholder="Enter Website URL .  .  ."  value={form.site} onChange={handleChange}/>
            <div className="flex w-full gap-5 justify-between">

            <input className="rounded-full border border-green-500 outline-none w-full p-4 py-1 text-black" type="text" name="username" id="" placeholder="Enter Username .  .  ." value={form.username} onChange={handleChange}/>

            <div className="relative">

            <input className="rounded-full  border border-green-500 outline-none w-[280px] p-4 py-1 text-black" type="password" name="password" id="" placeholder="Enter the password .  .  ." value={form.password} onChange={handleChange}/>
            <span className="absolute right-0 text-black top-0" onClick={showPassword}>
                <img ref={ref} className="rounded-full p-1 mr-1 cursor-pointer " width={32} src="icons/eye.png" alt="eye" />
            </span>
            </div>
            
            </div>
            <div className="flex items-center justify-center">
            <button onClick={savePassword} className="flex items-center text-black font-bold gap-3 bg-green-300 px-12 py-2 rounded-full outline-none border border-green-300 cursor-pointer hover:bg-green-600">Add Password
            <AiOutlineAppstoreAdd size={24} />
            </button>
                
                
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Manager