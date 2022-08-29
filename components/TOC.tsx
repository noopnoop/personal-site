import Link from "next/link"


const TOC = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-50 p-5 space-y-4">
        <div className="text-center text-4xl font-bold">
          Welcome to my freaky little world.
        </div>
        <Link href="/blog">
          <div className="text-2xl font-medium hover:font-extrabold hover:bg-gray-100 hover:cursor-pointer">
            Blog
          </div>
        </Link>
      
        <Link href="/blog">
          <div className="text-2xl font-medium hover:font-extrabold hover:bg-gray-100 hover:cursor-pointer">
            Portfolio
          </div>
        </Link>
    </div>
  )
}

export default TOC