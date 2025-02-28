"use client";

import Link from 'next/link';
import Container from './container';
import MainNav from './main-nav';
import { useGetCategories } from '@/hooks/useGetCategories';
import NavbarActions from './navbar-actions';

const Navbar = () => {
    const { data: categories } = useGetCategories();
    console.log(categories)
  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 h-16 flex items-center'>
          <Link
            href='/'
            className='ml-4 flex lg:ml-0 gap-x-2'
          >
            <p className='font-bold text-xl'>STORE</p>
          </Link>
          <MainNav data={categories ?? []} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
