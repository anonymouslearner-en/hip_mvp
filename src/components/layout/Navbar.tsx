export const Navbar = () => {
  return (
    <nav className="mx-auto max-w-5xl flex flex-row py-3 gap-2 items-end">
      <img
        className="h-10 w-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0e/TH_Koeln_Logo.svg"
        alt="TH Koeln Logo"
      />
      <b className="h-10 w-0.5 bg-neutral-300" />
      <img src="" alt="" />
      <p className="text-xl font-semibold">HIP WiSe 2025 - 2026</p>
      <p className="text-sm font-light">Gruppe 11</p>
    </nav>
  );
};
