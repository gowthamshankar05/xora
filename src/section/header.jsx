import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import clsx from 'clsx'

const NavLink = ({title})=>(
    <LinkScroll
      className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'>
        {title}
    </LinkScroll>
)

const Header = () => {


  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
        setHasScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll);
    return ()=>{
        window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <header className={clsx('fixed top-0 left-0 z-50 w-full py-4 transition-all duration-500 max-lg:py-4', hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]')}>
        <div className='container flex max-md:h-12 h-20 items-center max-lg:px-5'>
            <a className='lg:hidden flex-1 cursor-pointer z-2'>
                <img src="mbp-3.png" width={80} height={80} alt="logo"/>
            </a>

            <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none')}>
                <div className='w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before'>
                    <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                        <ul className='flex justify-start max-lg:block max-lg:px-12 '>
                        <li className='nav-logo'>
                                <LinkScroll
                                    to="hero"
                                    offset={-100}
                                    spy
                                    smooth
                                    className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}
                                >
                                    <img src="/mbp-3.png" width={120} height={120} alt="logo"/>
                                </LinkScroll>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header