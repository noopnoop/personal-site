import Link from "next/link"
import Image from "next/image"
import testAvatar from '../public/assets/madarc.png'

const TOC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 rounded-lg bg-stone-50 p-5 space-y-4">
        <div className="text-center text-4xl font-bold">
          yokoso to my web page  	(o´▽`o)
        </div>
        <div>
          <div className="float-left px-3 pt-3">
            <Image
              src={testAvatar}
              alt="A picture of me"
              height="120px"
              width="120px"
            />
          </div>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio, provident necessitatibus repellat perferendis dolorum est enim officia ullam repudiandae ea delectus commodi in eos eius impedit eligendi fugit aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem, molestiae et neque nihil obcaecati vero cupiditate illo esse sunt nam rerum ipsa ad atque reiciendis quibusdam nisi tempore.
          </p>
        </div>
        <Link href="/blog">
          <div className="text-2xl border-2 shadow rounded-lg p-1 pl-5 font-medium hover:font-extrabold hover:bg-stone-100 hover:cursor-pointer">
            Blog
          </div>
        </Link>
      
        <Link href="/portfolio">
          <div className="text-2xl border-2 shadow rounded-lg p-1 pl-5 font-medium hover:font-extrabold hover:bg-stone-100 hover:cursor-pointer">
            Portfolio
          </div>
        </Link>
    </div>
  )
}

export default TOC