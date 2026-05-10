import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      aria-label="primary"
      className="bg-surface flex w-full items-center gap-1 px-6 py-3"
    >
      <Image
        src="/images/logo-icon.svg"
        alt="Wrathfinder Logo"
        width={337.324}
        height={337.324}
        style={{
          width: "auto",
          height: "30px",
          filter: "invert(1)",
        }}
      />
      <Image
        src="/images/logo-wordmark.svg"
        alt="Wrathfinder wordmark"
        width={674.553}
        height={65.5227}
        style={{
          width: "auto",
          height: "20px",
          filter: "invert(1)",
        }}
      />
    </nav>
  );
};

export default Navbar;
