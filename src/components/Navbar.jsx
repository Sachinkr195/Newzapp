import React from 'react'

const Navbar = ({setcategory}) => {
  return (
   <nav className='bg-black text-white h-16 w-full rounded-md flex flex-row '>
  <div className='flex items-center justify-center h-16 bg-black gap-5 p-5'>
  <h1 className='text-4xl font-serif font-semibold text-black tracking-wide shadow-lg bg-white p-1 rounded-md' onClick={()=>setcategory("general")}>
    NewsRz
  </h1>
  <span className='flex flex-row gap-3'>
     <span onClick={()=>setcategory("technology")}><span className='hover:pointer' >Technology</span></span>
     <span onClick={()=>setcategory("health")}><span className='hover:pointer'>Health</span></span>
     <span onClick={()=>setcategory("business")}><span className='hover:pointer'>Business</span></span>
     <span onClick={()=>setcategory("sports")}><span className='hover:pointer'>Sports</span></span>
     <span onClick={()=>setcategory("entertainment")}><span className='hover:pointer'>Entertainment</span></span>
  </span>
</div>
   </nav>
   
   
  )
}

export default Navbar