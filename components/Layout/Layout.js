import MobileNavigation from './MobileNavigation' 
import Footer from './Footer'
import Header from './Header'
import { useState,  useRef, useEffect } from 'react' 

import { useRouter } from 'next/router' 


const Layout = ({ children }) => {

  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = useRef('/')
  const {asPath} = useRouter() 
   
    useEffect(() => {
        if(currentPath !== asPath) {
          setMobileMenuOpen(false)
        }
    }, [asPath]) 


   const toggleMobileNav = () => {
      setMobileMenuOpen(!mobileMenuOpen)
  }

  return (

 
      <div className="wrapper">
      <Header toggleMobile={toggleMobileNav} />
      <MobileNavigation show={mobileMenuOpen} toggleSidebar={toggleMobileNav} /> 
      {children}
      <Footer />
      </div>
 

  )
}

export default Layout
