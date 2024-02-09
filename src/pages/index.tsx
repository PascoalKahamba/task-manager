import { FormEventHandler, ChangeEventHandler } from "react";
import RadioCards from "../components/radioCards";
import Notes from "../components/notes";
import { useState } from "react";
import useFetch, { AnnotationsProps } from "../hooks/useFetch";
import SkeletonColor from "../components/skeletonColor";
import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";

type HandleSubmitProps = FormEventHandler<HTMLFormElement> | undefined;
type HandleChangeProps =
  | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined;

interface IndexPageProps {
  inicialAnnotations: AnnotationsProps[];
}

function bothFieldsAreEmpty(title: string, notes: string) {
  if (!title || !notes) {
    return true;
  }
  return false;
}

export default function IndexPage({ inicialAnnotations }: IndexPageProps) {
  const [form, setForm] = useState({ title: "", notes: "" });
  const [getNotes, getError, getLoading] = useFetch<AnnotationsProps>(
    "annotations",
    "get"
  );

  const [createNotes, createError, createLoading] = useFetch<AnnotationsProps>(
    "annotations",
    "post"
  );

  const annotations: AnnotationsProps[] = getNotes as AnnotationsProps[];
  const handleChange: HandleChangeProps = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
  };
  const handleSubmit: HandleSubmitProps = (event) => {
    event.preventDefault();

    alert("hello");

    setForm({ title: "", notes: "" });
  };

  const errorFields = bothFieldsAreEmpty(form.title, form.notes);

  console.log(annotations);

  return (
    <section className=" bg-slate-300 flex justify-end items-center p-2 h-[100vh]">
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
                value={form.title}
                onChange={handleChange}
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
                value={form.notes}
                onChange={handleChange}
                className="p-2 rounded w-full border-none resize-none"
              />
            </p>
          </div>
          <button
            className={`${
              errorFields
                ? "bg-blue-200 cursor-auto"
                : "bg-blue-800 cursor-pointer"
            } rounded-lg text-slate-200 text-lg p-2 w-full mt-2 transition-all`}
            disabled={errorFields}
          >
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
        {getLoading ? (
          <SkeletonColor />
        ) : (
          annotations.map(({ _id, notes, title }) => (
            <Notes key={_id} notes={notes} title={title} />
          ))
        )}
      </div>
    </section>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const annotationsData = await fetch("http://localhost:3001/annotations");
//   const InicialAnnotations =
//     (await annotationsData.json()) as AnnotationsProps[];
//   console.log("Scheletor", InicialAnnotations);
//   return {
//     props: { InicialAnnotations },
//   };
// };
