export default function IndexPage() {
  return (
    <section className=" bg-slate-200 flex justify-center items-center gap-2 mt-3 ">
      <form className="bg-slate-100 p-2">
        <h1>Caderno de Notas</h1>
        <label htmlFor="title">Titulo</label>
        <p>
          <input
            type="text"
            id="title"
            placeholder="Titulo da Anotação"
            className="p-2 rounded w-full border-none"
          />
        </p>

        <label htmlFor="notes">Anotações</label>
        <p>
          <textarea
            id="notes"
            placeholder="Digite as anotações"
            className="p-2 rounded w-full border-none"
          />
        </p>
        <button className="bg-blue-800 rounded-sm text-slate-950 p-3">
          Adicionar
        </button>
      </form>
      <div>
        <p className="text-slate-200">Hello World</p>
      </div>
    </section>
  );
}
