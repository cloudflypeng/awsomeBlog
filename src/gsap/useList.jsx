import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useGsapList = ({ item, container = document.body }) => {
  useGSAP(() => {
    // gsap code here...
    gsap.timeline().from(item, { y: 100, opacity: 0, delay: (index) => index * 0.1 }); // <-- automatically reverted

  }, { scope: container }); // <-- scope is for selector text (optional)
}

export default useGsapList

