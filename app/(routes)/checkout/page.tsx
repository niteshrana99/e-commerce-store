'use client';

import Container from '@/app/components/container';
import useCart from '@/hooks/use-cart';
import { useCreateOrder } from '@/hooks/useCreateOrder';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutPage = () => {
  const { items, removeAll } = useCart();

  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState<any>({});
  const { mutate } = useCreateOrder();
  const router = useRouter()
;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: any = {};

    if (!address) {
      newErrors.address = 'Address is required';
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      mutate(
        {
          address,
          phone: phoneNumber,
          productIds: items.map((item) => item.id),
        },
        {
          onSuccess: () => {
            router.push('/');
            removeAll();
            toast.success('Orders placed successfully')
          },
        }
      );
    }
  };
  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-16 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-black'>Complete order</h1>
          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <div className='lg:col-span-7'>
              <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='address'
                  >
                    Address
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='address'
                    type='text'
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                  {errors.address && (
                    <div className='text-red-500 text-xs italic'>
                      {errors.address}
                    </div>
                  )}
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='phoneNumber'
                  >
                    Phone Number
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='phoneNumber'
                    type='number'
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                  {errors.phoneNumber && (
                    <div className='text-red-500 text-xs italic'>
                      {errors.phoneNumber}
                    </div>
                  )}
                </div>
                <div className='flex items-center justify-between'>
                  <button
                    className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
