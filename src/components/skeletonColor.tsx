import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { AnnotationsProps } from "../hooks/useFetch";

// interface SkeletonColorProps {
//   annotations: AnnotationsProps[];
// }

const annotations = [1, 2, 3, 4, 5, 6];

export default function SkeletonColor() {
  return (
    <>
      {annotations.map((_, index) => (
        <Skeleton
          className="bg-slate-100 leading-10 rounded-md p-2 flex-1 basis-52"
          variant="rectangular"
          width={208}
          key={index}
          height={118}
        />
      ))}
    </>
  );
}
