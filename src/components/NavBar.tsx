import { useState } from "react"

export default function NavBar({translation}:{translation:Record<string,any>}){

  const [isOpen,setIsOpen] = useState<boolean>(false)

return <>

    
    <button onClick={()=>{setIsOpen(true)}} className="border-2 rounded-full p-1 border-gray-500/20">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
    </button>
    
    <nav onClick={()=>setIsOpen(false)} className={`fixed top-0 w-dvw h-dvh flex flex-col justify-center items-center gap-4 transition-all duration-500 bg-white z-40 ${isOpen?'left-0':'left-full'}`}>
      {
      translation.header.nav &&
        Object.entries(translation.header.nav).map(([key,text]:any)=>(
          <a href={`#${key}`} className="text-lg font-medium transition px-3 py-2 border-2 border-transparent rounded-lg hover:border-emerald-400" >{text}</a>
        ))
      }
    </nav>
  </>
}
