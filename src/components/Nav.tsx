import logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <nav className='px-10 py-5' >
      <div className="container mx-auto flex justify-between">
       <img src={logo} alt="DevStack logo" className="h-8" />
       <ul className="flex gap-6 items-center" list-none m-0 p-0>
         <li className='text-[#D91B7E]' >Home</li>
         <li>Technologies</li>
         <li>Projects</li>
         <li>About</li>
         <li>Contact</li>
       </ul>
       <div className="flex gap-3" item-center>
         <button className="btn btn-ghost">Sign In</button>
         <button className="btn btn-active btn-secondary">Sign Up</button>
       </div>
     </div>
   </nav>
  );
};

export default Nav;