import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Image
        src="/images/logo-icon.png"
        alt="Wrathfinder Logo"
        width={40}
        height={40}
      />
    </nav>
  );
};

export default Navbar;
