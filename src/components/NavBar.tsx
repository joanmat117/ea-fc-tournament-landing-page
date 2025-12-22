import { useState } from "react"

const sectionIcons = [
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>,
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trophy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 21l8 0" /><path d="M12 17l0 4" /><path d="M7 4l10 0" /><path d="M17 4v8a5 5 0 0 1 -10 0v-8" /><path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>,
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M8 15h2v2h-2z" /></svg>,
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>,
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bubble"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.4 3a5.34 5.34 0 0 1 4.906 3.239a5.333 5.333 0 0 1 -1.195 10.6a4.26 4.26 0 0 1 -5.28 1.863l-3.831 2.298v-3.134a2.668 2.668 0 0 1 -1.795 -3.773a4.8 4.8 0 0 1 2.908 -8.933a5.33 5.33 0 0 1 4.287 -2.16" /></svg>
]

export default function NavBar({translation}:{translation:Record<string,any>}){

  const [isOpen,setIsOpen] = useState<boolean>(false)

return <>

    
    <button onClick={()=>{setIsOpen(!isOpen)}} className={`p-1 size-10 transition-colors duration-500 border-gray-500/20 cursor-pointer ${isOpen?'z-50 text-white':' '}`}>
      { isOpen?
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="animate-fade-in icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
      :
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="animate-fade-in icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
      }
    </button>
    
    <nav onClick={()=>setIsOpen(false)} className={`bg-[url(/hero.jpg)] overflow-auto bg-fixed lg:bg-scroll bg-center bg-cover fixed top-0 w-dvw h-lvh  transition-all duration-500 z-40 ${isOpen?'left-0 ':'left-full '}`}>
      <div className="flex flex-col backdrop-blur-md justify-center min-h-lvh py-4 w-vw items-center gap-4 bg-black/60">
      {
      translation.header.nav &&
        Object.entries(translation.header.nav).map(([key,text]:any,index:number)=>(
          <a href={`#${key}`} className="text-lg font-medium transition px-4 py-2 rounded-full border-2 flex gap-2 items-center hover:scale-105 hover:tracking-wider transition-all ease-in-out border-slate-300/40 text-slate-50 bg-slate-100/10" > 
                <span>
                  {sectionIcons[index]}
                </span>
                {text}
              </a>
        ))
      }
      </div>
    </nav>
  </>
}
