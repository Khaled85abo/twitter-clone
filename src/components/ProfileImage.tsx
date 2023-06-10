import Image from "next/image";

type ProfileImageTypes = {
  src?: string | null;
  className?: string;
};
export function ProfileImage({ src, className = "" }: ProfileImageTypes) {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src && <Image src={src} alt="Profile Image" quality={100} fill />}
    </div>
  );
}
