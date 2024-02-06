import { FormEventHandler } from "react";

type HandleSubmitProps = FormEventHandler<HTMLFormElement> | undefined;

export default function IndexPage() {
  const handleSubmit: HandleSubmitProps = (event) => {
    event.preventDefault();
  };

  return (
    <section className=" bg-slate-200 flex justify-center items-center gap-2 mt-3 p-2">
      <form
        className="bg-slate-100 p-2 w-[45%] leading-10  rounded-md"
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
      </form>
      <div>
        <p className="text-slate-200">Hello World</p>
      </div>
    </section>
  );
}
