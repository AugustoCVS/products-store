export const Image: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="bg-black w-[320px] h-[360px]" />;
};
