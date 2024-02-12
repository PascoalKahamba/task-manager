import { useCallback, useState } from "react";
import { api } from "../server/axios";

export interface AnnotationsProps {
  _id: string;
  title: string;
  notes: string;
  priority: boolean;
}

type BodyProps = Omit<AnnotationsProps, "_id">;

export type MethodProps = "invalid" | "get" | "post" | "delete" | "change";

export default function useFetch<T>() {
  const [notes, setNotes] = useState<T | T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(
    async (url: string, method: MethodProps, body?: BodyProps) => {
      let response;
      let json;
      try {
        setError(false);
        setLoading(true);
        if (method === "get") {
          const response = await api.get<T[]>(url);
          json = response.data;
          if (response.status !== 200) throw new SyntaxError("Error internet");
        }
        if (method === "post") {
          const { notes, priority, title } = body as AnnotationsProps;
          const response = await api.post<T>(url, {
            title,
            notes,
            priority,
          });
          json = response.data;

          if (response.status !== 200) throw new SyntaxError("Error internet");
        }
        if (method === "delete") {
          const response = await api.delete<T>(url);
          json = response.data;
          if (response.status !== 200) throw new SyntaxError("Error internet");
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
        if (json) setNotes(json);
        return { response, json };
      }
    },
    []
  );

  return {
    notes,
    loading,
    error,
    request,
  };
}
