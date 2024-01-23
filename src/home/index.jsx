import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaSquareXTwitter, FaWeixin } from "react-icons/fa6";
const Home = () => {

  useGSAP(() => {
    // gsap code here...
    gsap.from([".who"], {
      opacity: 0,
      y: 50
    });
  }, { scope: document.body }); // <-- scope is for selector text (optional)

  return (
    <section className="w-full flex justify-center text-base font-mono mt-20">
      <article className="who w-3/4 md:w-2/5 flex flex-col">
        <h2 className="font-extralight">MEANC</h2>
        <p className="my-1">Hey, I am MEANC, love UX and Efficiency improvement</p>
        <p className="leading-8">A front-end development in qihoo company who having experience in big data</p>

        <h3 className="my-1 mt-5">Skill</h3>
        <p className="leading-8">
          ES, React, Vue, Redux, immer, immutable, lottie, antd, antv(S2, X6, G6), antd Chart,Echarts, unocss, less, vite, webpack, Git, Npm
        </p>
        <div>
          <h3 >Social media</h3>
          <div className="flex text-3xl gap-4">
            <a className="text-light-50" href="https://github.com/cloudflypeng" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a className="text-light-50" href="https://twitter.com/meanc_p" target="_blank" rel="noreferrer">
              <FaSquareXTwitter />
            </a>
            <a className="text-light-50" href="/img/wechat.jpg" target="_blank">
              <FaWeixin />
            </a>

          </div>
        </div>



      </article>
    </section>
  )
}

export default Home