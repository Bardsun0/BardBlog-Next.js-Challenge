import Image from "next/image";

const AuthorInfo = ({ image, author, date }) => (
  <div className="flex items-center space-x-2">
    <div className="w-10 h-10 rounded-full overflow-hidden relative">
      <Image
        src={image}
        alt={author}
        fill
        sizes="(max-width: 40px) 100vw"
        className="object-cover"
      />
    </div>
    <span className="font-medium">{author}</span>
    <span className="text-gray-300">•</span>
    <span>{date}</span>
  </div>
);

export default AuthorInfo;
