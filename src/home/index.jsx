import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
      <article className="who w-3/4 md:w-2/5">
        <h2 className="font-extralight">MEANC</h2>
        <p>Hey, I am MEANC, love UX and Efficiency improvement</p>
        <p className="leading-8">A front-end development in qihoo company who having experience in big data</p>
        <hr />
        <h3>Skill</h3>
        <p className="leading-8">
          ES, React, Vue, Redux, immer, immutable, lottie, antd, antv(S2, X6, G6), antd Chart,Echarts, unocss, less, vite, webpack, Git, Npm
        </p>
      </article>
    </section>
  )
}

export default Home