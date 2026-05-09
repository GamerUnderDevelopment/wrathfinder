import Image from "next/image";

const Navbar = () => {
  return (
    <nav aria-label="primary">
      <Image
        src="/images/logo-icon.png"
        alt="Wrathfinder Logo"
        width={40}
        height={40}
      />
      <Image
        src="/images/logo-wordmark.png"
        alt="Wrathfinder wordmark"
        width={160}
        height={40}
      />
    </nav>
  );
};

export default Navbar;
