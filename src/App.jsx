// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function App() {
  const [click, saatdiklik] = useState(false)
  const [card, saatcardtampil] = useState(false)

  const loading = (event) => {
    event.preventDefault();
    saatdiklik(true)
    saatcardtampil(true)

   setTimeout(() => {
     saatdiklik(false)
  
  }, 2000)
  
  }

  return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a href="#" className="btn btn-ghost normal-case text-xl">Gohashindi</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://source.unsplash.com/random/?bochi" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

{/* avatar */}

<div className="flex justify-center items-center h-fit mt-10">
  <div className="avatar">
    <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex justify-center mx-auto items-center">
      <img src="/img/anime.jpg" className="w-full h-full rounded-full" alt="Avatar" />
    </div>
  </div>
</div>
{/* text-welcome */}
<div className="p-3 mx-auto text-center mt-7 font-bold">
  <h1 className="text-center">Halo Selamat Datang Di Tools Chat-Gpt Sederhana</h1>
</div>

{/* forms */}
<div className="flex justify-center items-center h-fit mt-10 w-full ">
  <div className="form form-control mx-auto">
    <form method="post" onSubmit={loading}>
    <input type="text" placeholder="Masukan Perintah anda (ex: Buatkan Sebuah Essay)" className="input input-bordered input-primary w-full " />
    {card && (<div className="card w-96 mt-5 bg-neutral shadow-xl">
  <div className="card-body mx-auto font-bold text-white">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>)}
    {click ?(<button className="flex btn mx-auto mt-5 justify-center">
  <span className="loading loading-spinner"></span>
  loading
</button>) : (<button className="flex btn btn-success mx-auto justify-center mt-5 hover:font-bold hover:btn-accent hover:text-white ">Submit</button>)}
    </form>
  </div>
</div>

{/* end */}

<div className="flex mt-5 items-center mx-auto h-full">
  <label className="flex mx-auto mt-5">
  <h1 className="text-black">©️copyright by <a href="https://github.com/hajilok" className="text-green-500">Imam Widodo Gh</a></h1>
  </label>
</div>

    </>
    )
}
