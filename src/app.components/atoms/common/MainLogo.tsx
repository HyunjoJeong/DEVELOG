import Image from "next/image";

export default function MainLogo({ w = 128, h = 54 }) {
  return <Image src={"/images/mainlogo.png"} alt="로고" width={w} height={h} />;
}
