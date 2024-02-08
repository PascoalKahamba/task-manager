import { MdDelete, MdOutlinePriorityHigh } from "react-icons/md";
import { AnnotationsProps } from "../hooks/useFetch";

type NotesProps = Omit<AnnotationsProps, "_id" | "priority">;

export default function Notes({ notes, title }: NotesProps) {
  return (
    <div className="bg-slate-100 leading-10 rounded-md p-2 flex-1 basis-52">
      <div className="flex justify-between items-center mb-2">
        <h1 className="font-medium text-lg">{title}</h1>
        <MdDelete
          size={17}
          className="cursor-pointer hover:bg-slate-200 transition-all"
        />
      </div>
      <p className="leading-5 mb-2">{notes}</p>
      <MdOutlinePriorityHigh
        size={17}
        className="cursor-pointer hover:bg-slate-200 transition-all"
      />
    </div>
  );
}
