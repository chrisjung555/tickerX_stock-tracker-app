import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image src="/assets/icons/tickerX-logo.svg" alt="tickerX logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/>
        </Link>
        <nav className="hidden sm:block">
        {/*navitems */}
        </nav>
        
    {/*userdropdown */}

      </div>
    </header>
  )
}

export default Header