import { FormEventHandler } from "react";
import RadioCards from "../components/radioCards";
import Notes from "../components/notes";

type HandleSubmitProps = FormEventHandler<HTMLFormElement> | undefined;

export default function IndexPage() {
  const handleSubmit: HandleSubmitProps = (event) => {
    event.preventDefault();
  };

  return (
    <section className=" bg-slate-300 flex justify-end items-center p-2 h-full">
      <div className="w-[40%] absolute">
        <form
          className="bg-slate-100 p-2 w-[36%] leading-10 rounded-md fixed h-auto z-0 left-3 top-4"
          onSubmit={handleSubmit}
        >
          <h1 className="font-medium text-xl text-center">Caderno de Notas</h1>

          <div className="border-b-2 border-b-slate-500 border-b-solid w-full">
            <label htmlFor="title">Titulo</label>
            <p>
              <input
                type="text"
                id="title"
                placeholder="Titulo da Anotação"
                className="p-2 rounded w-full border-none mb-2"
              />
            </p>
          </div>

          <div className="border-b-2 border-b-slate-500 border-b-solid w-full">
            <label htmlFor="notes">Anotações</label>
            <p>
              <textarea
                id="notes"
                placeholder="Digite as anotações"
                className="p-2 rounded w-full border-none resize-none"
              />
            </p>
          </div>
          <button className="bg-blue-800 rounded-lg text-slate-200 text-lg p-2 w-full mt-2">
            Adicionar
          </button>
          <div className="flex w-full justify-center items-center">
            <RadioCards title="Todos" />
            <RadioCards title="Prioridade" />
            <RadioCards title="Normal" />
          </div>
        </form>
      </div>
      <div className="flex justify-center gap-2 w-[60%] p-2 flex-wrap">
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </div>
    </section>
  );
}
