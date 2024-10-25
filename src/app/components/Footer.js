import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='flex float-end gap-4 cursor-pointer'>
        <div>
          <Link href={"/privacy-policy"} className='hover:underline'>Privacy Policy</Link></div>
        <div>
          <Link href={"/terms-conditions"} className='hover:underline'>Terms of Use</Link>
        </div>
      </div>
    </>)
}
