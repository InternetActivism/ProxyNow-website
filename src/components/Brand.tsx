import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2 text-lg md:text-3xl lg:text-4xl font-semibold">
      <Image src="/logo.svg" alt="logo" width={36} height={36} />
      ProxyNow
    </Link>
  );
}
