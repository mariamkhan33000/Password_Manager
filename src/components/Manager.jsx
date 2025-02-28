import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { IoCopy } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FcDeleteDatabase } from "react-icons/fc";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef()

  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passsword = localStorage.getItem("password");
    if (passsword) {
      setPasswordArray(JSON.parse(passsword));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "text"
    if (ref.current.src.includes("icons/crosseye.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password"
    } else {
        passwordRef.current.type = "text";
      ref.current.src = "icons/crosseye.png";
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(passwordArray);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    alert("Coppy to clipbord")
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="mycontainer">
        <div className="logo font-bold text-2xl text-center">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </div>
        <p className="text-green-600 text-lg text-center">
          Your Own Password Manager
        </p>
        <div className=" flex flex-col p-4 gap-5">
          <input
            className="rounded-full border border-green-500 outline-none w-full p-4 py-1 text-black"
            type="text"
            name="site"
            id=""
            placeholder="Enter Website URL .  .  ."
            value={form.site}
            onChange={handleChange}
          />
          <div className="flex w-full gap-5 justify-between">
            <input
              className="rounded-full border border-green-500 outline-none w-full p-4 py-1 text-black"
              type="text"
              name="username"
              id=""
              placeholder="Enter Username .  .  ."
              value={form.username}
              onChange={handleChange}
            />

            <div className="relative">
              <input
              ref={passwordRef}
                className="rounded-full  border border-green-500 outline-none w-[280px] p-4 py-1 text-black"
                type="password"
                name="password"
                id=""
                placeholder="Enter the password .  .  ."
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-0 text-black top-0"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="rounded-full p-1 mr-1 cursor-pointer "
                  width={32}
                  src="icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={savePassword}
              className="flex items-center text-black font-bold gap-3 bg-green-300 px-12 py-2 rounded-full outline-none border border-green-300 cursor-pointer hover:bg-green-600"
            >
              Add Password
              <AiOutlineAppstoreAdd size={24} />
            </button>
          </div>

          <div className="password">
            <h2 className="font-bold text-2xl py-4">Your Password</h2>
            {passwordArray.length === 0 && <div>No Password to show</div>}
            {passwordArray.length != 0 && 
            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-1">Site</th>
                  <th className="py-1">Username</th>
                  <th className="py-1">Password</th>
                  <th className="py-1">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-200">
                {passwordArray.map((item, index) => {
                    return <tr key={index} className="">
                    <td className="text-center py-1 min-w-32 border border-white">
                      <div className="flex items-center justify-center">
                        <a href={item.site} target="_blank" rel="noopener noreferrer">
                          {item.site}
                        </a>
                        <IoCopy className="ml-2 cursor-pointer" onClick={() => {copyText(item.site)}}/>
                      </div>
                    </td>
                    <td className="text-center py-1 min-w-32 border border-white">
                      <div className="flex items-center justify-center">
                        {item.username}
                        <IoCopy className="ml-2 cursor-pointer" onClick={() => {copyText(item.username)}}/>
                      </div>
                    </td>
                    <td className="text-center py-1 min-w-32 border border-white">
                      <div className="flex items-center justify-center">
                        {item.password}
                        <IoCopy className="ml-2 cursor-pointer" onClick={() => {copyText(item.password)}}/>
                      </div>
                    </td>
                    <td className="text-center py-1 min-w-32 border border-white">
                      <div className="flex items-center justify-center gap-3">
                        <span className="cursor-pointer"><FaEdit size={20}/></span>
                      <span className="cursor-pointer"><FcDeleteDatabase size={20}/></span>
                      </div>
                    </td>
                  </tr>
                  
                })}
                
                
              </tbody>
            </table>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
