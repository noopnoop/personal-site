import Link from "next/link"
import Layout from "../components/layout"
import Image from "next/image"
import githubLogo from '../public/assets/GitHub-Mark-32px.png'

export default function Portfolio() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-10 rounded-lg bg-stone-50 p-5 space-y-4">
        <div className="text-4xl">
          <Link href="/">
            <div className="float-left hover:cursor-pointer hover:font-extrabold">
              ←
            </div>
          </Link>
          <div className="text-right font-bold">
            my prtofolio
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-10 rounded-lg bg-stone-50 p-5 space-y-4">
        <div className="text-4xl">
          <Link href="/">
            <div className="float-left hover:cursor-pointer">
              <Image src={githubLogo}
                width="32px"
                height="32px"
              />
            </div>
          </Link>
          <div className="text-right font-bold">
            my prtofolio
          </div>
        </div>
        <p className="text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ea laborum praesentium et eius quos incidunt similique iste aliquid cupiditate esse fugit quasi, temporibus ducimus quam blanditiis vero minima mollitia!
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-10 rounded-lg bg-stone-50 p-5 space-y-4">
        <div className="text-4xl">
          <Link href="/">
            <div className="float-right hover:cursor-pointer">
              <Image src={githubLogo}
                width="32px"
                height="32px"
              />
            </div>
          </Link>
          <div className="text-left font-bold">
            my prtofolio
          </div>
        </div>
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ea laborum praesentium et eius quos incidunt similique iste aliquid cupiditate esse fugit quasi, temporibus ducimus quam blanditiis vero minima mollitia!
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-10 rounded-lg bg-stone-50 p-5 space-y-4">
        <div className="text-4xl">
          <Link href="/">
            <div className="float-left hover:cursor-pointer">
              <Image src={githubLogo}
                width="32px"
                height="32px"
              />
            </div>
          </Link>
          <div className="text-right font-bold">
            my prtofolio
          </div>
        </div>
        <p className="text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ea laborum praesentium et eius quos incidunt similique iste aliquid cupiditate esse fugit quasi, temporibus ducimus quam blanditiis vero minima mollitia!
        </p>
      </div>
    </Layout>
  )
}