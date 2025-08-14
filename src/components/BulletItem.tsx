type BulletItemProps = {
  children: React.ReactNode;
};

export default function BulletItem({ children }: BulletItemProps) {
  return (
    <>
      {/* Desktop BulletItems */}
      <li className="hidden md:flex items-center gap-2">
        <svg
          className="w-2 h-2 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="8" />
        </svg>
        <p className="font-dongle text-3xl text-gray-400">
          {children}
        </p>
      </li>

      {/* Mobile BulletItems */}
      <li className="md:hidden flex items-center gap-2">
        <svg
          className="w-2 h-2 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="8" />
        </svg>
        <p className="font-dongle text-2xl text-gray-400">
          {children}
        </p>
      </li>
    </>
  );
}
