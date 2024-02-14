import Link from 'next/link'
import React from 'react'

function Header() {
  return (
   <div>
      <Link href="/">Home</Link> 
      <Link href="/performance">performance</Link> 
      <Link href="/reliability">reliability</Link> 
      <Link href="/scale">scale</Link> 
   </div>
  )
}

export default Header