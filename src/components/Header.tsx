// header component that spans the entire width of the page, contains the logo and the navigation bar
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <div className="bg-gray-900" >
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center w-fit">
          <Image
            className="h-18 w-18 rounded-full justify-self-end inline border-4 border-[#096c64] shadow-lg"
            src="/avatar.png"
            alt="avatar"
            width={96}
            height={96}
          />
          <h1 className="m-5 text-4xl font-bold text-white">Bullshit and Whimsy</h1>
        </Link>
      </div>
    </div>
  )
}
