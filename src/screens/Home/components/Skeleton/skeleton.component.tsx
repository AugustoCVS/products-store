import { SkeletonComponent } from "@/components/commons/Skeleton/skeleton.component";

export const Skeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <SkeletonComponent
          key={index}
          height={375}
          width={300}
          baseColor="#323238"
          borderRadius={8}
          highlightColor="#29292E"
        />
      ))}
    </div>
  );
};
