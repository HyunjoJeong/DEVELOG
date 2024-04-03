import Image from "next/image";

export default function MainLogo({ w = 96, h = 40 }) {
  return <Image src={"/images/mainlogo.png"} alt="로고" width={w} height={h} />;
}
