import { MdDelete, MdOutlinePriorityHigh } from "react-icons/md";

export default function Notes() {
  return (
    <div className="bg-slate-100 leading-10 rounded-md p-2 flex-auto w-[40%]">
      <div className="flex justify-between items-center">
        <h1>Fazer Compras</h1>
        <MdDelete />
      </div>
      <p className="leading-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem
        molestias architecto delectus voluptatibus aliquam ex maxime laudantium
        dolorem ipsum quo quaerat saepe, eveniet excepturi eum, dolor vitae
        aspernatur dicta.
      </p>
      <MdOutlinePriorityHigh />
    </div>
  );
}
