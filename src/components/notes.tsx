import { MdDelete, MdOutlinePriorityHigh } from "react-icons/md";

export default function Notes() {
  return (
    <div className="bg-slate-100 leading-10 rounded-md p-2 flex-1 basis-52">
      <div className="flex justify-between items-center mb-2">
        <h1 className="font-medium text-lg">Fazer Compras</h1>
        <MdDelete size={15} className="cursor-pointer" />
      </div>
      <p className="leading-5 mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem
        molestias architecto delectus voluptatibus aliquam ex maxime laudantium
        dolorem ipsum quo quaerat saepe, eveniet excepturi eum, dolor vitae
        aspernatur dicta.
      </p>
      <MdOutlinePriorityHigh size={15} className="cursor-pointer" />
    </div>
  );
}
