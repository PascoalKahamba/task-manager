import Skeleton from "@mui/material/Skeleton";
import { AnnotationsProps } from "../hooks/useFetch";

interface SkeletonColorProps {
  annotations: AnnotationsProps[];
}

export default function SkeletonColor({ annotations }: SkeletonColorProps) {
  console.log("Skeleton", annotations);
  return (
    <>
      {annotations.map((annotation) => (
        <Skeleton
          className="bg-slate-100 leading-10 rounded-md p-2 flex-1 basis-52"
          variant="rectangular"
          width={208}
          key={annotation._id}
          height={118}
        />
      ))}
    </>
  );
}
