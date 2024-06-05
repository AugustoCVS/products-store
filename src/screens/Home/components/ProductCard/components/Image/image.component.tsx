export const Image: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <img src={src} alt={alt} width={150} className="bg-black w-full" />;
};
