import { Star } from "lucide-react";

export const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  const renderStars = () => {
    rating = Math.floor(rating);

    const stars = Array.from({ length: 5 }, (_, index) => {
      if (index < rating) {
        return (
          <Star
            key={index}
            size={16}
            strokeWidth={1}
            color="#FFD700"
            fill="#FFD700"
          />
        );
      }

      return <Star key={index} size={16} strokeWidth={1} color="#A0AEC0" />;
    });

    return stars;
  };

  return (
    <div className="flex flex-row items-center gap-1">{renderStars()}</div>
  );
};
