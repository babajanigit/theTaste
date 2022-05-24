import React, { useRef } from 'react';
import Banner from '../../components/Home/Banner';
import Menu from '../../components/Common/Menu';
import CartCountButton from '../../components/Common/CartCountButton'
import Footer from '../../components/Common/Footer';
import { menuItemsData } from '../../components/Common/Menu/data';

const Home = () => {
  const menuRef = useRef();
  const handleScrollMenu=()=>menuRef.current.scrollIntoView({behavior:'smooth'})
  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu}/>
      <Menu list={menuItemsData} ref={menuRef} />
      <CartCountButton/>
      <Footer/>
    </div>
  )
}

export default Home
