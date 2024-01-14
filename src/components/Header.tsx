import img1 from "../assets/photos/Screenshot 2023-10-19 173226.png"

function Header() {
  return (
    <div>

<div className="h-screen bg-cover pt-[5%] " style={{backgroundImage:`url(https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg)`}}>

<div className="bg-slate-100 w-[80%] h-[90%] ml-[10%] rounded-lg ">
    <div>
        <ul className="flex space-x-8 p-6">
            <li className="text-xl font-bold bg-gradient-to-r from-red-500 to-blue-600 text-transparent bg-clip-text">Wiggle</li>
            <span className="flex-1"></span>
            <li className="text-orange-500">Home</li>
            <li>Insurances</li>
            <li>Claims</li>
            <li>Testimonials</li>
            <li>FAQ's</li>
            <li>Pricing</li>
            
        </ul>
    </div>

<div className="flex">
<div className="ml-8 p-10">
        <p>Made with for tailwind css developers</p>
        <h1 className="text-6xl font-bold">stand out <br />from the <br /><span className="text-orange-600">crowd</span></h1><br />
        <p>Build your MVP with user experience, <br />best practices and eye-catching interfaces.</p><br />
        
        <div className="flex">
        <button className="bg-orange-500  rounded-3xl text-white w-44 h-12">Get Started</button>
        <p className="text-orange-500 ml-8 p-3 underline decoration-solid text-sm font-medium">FREE TRAIL</p>
        </div>
        </div>

        <div>
        <img className="h-96  ml-32 mt-5" src={img1} alt="" />
      </div>
</div>
</div>
</div>

  

</div>
  )
}

export default Header
