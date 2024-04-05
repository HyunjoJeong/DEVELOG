import Image from "next/image";

export default function MainLogo({ width = 96, height = 40 }) {
  return (
    <Image
      src={"/images/mainlogo.png"}
      alt="로고"
      priority
      width={width}
      height={height}
    />
  );
}
