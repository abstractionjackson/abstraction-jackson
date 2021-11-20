import Image from 'next/image';

const ProfileImage = () => (
  <div className="container mx-auto rounded-full border-2 overflow-hidden w-1/3 max-w-xs">
      <Image src='/profile.png' height='1028' width='1028' layout='responsive' />
  </div>
)

export default ProfileImage;