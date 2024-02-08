import { useEffect, useState } from "react";
import { api } from "../server/axios";

export interface AnnotationsProps {
  _id: string;
  title: string;
  notes: string;
  priority: boolean;
}

type MethodProps = "get" | "post" | "delete";

export default function useFetch<T>(
  url: string,
  method: MethodProps,
  body?: AnnotationsProps | T
) {
  const [notes, setNotes] = useState<T | T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function managenerAnnotations() {
      try {
        setLoading(true);
        if (method === "get") {
          const annotationsData = await api.get<T[]>(url);
          setNotes(annotationsData.data);
        } else if (method === "post") {
          const { notes, priority, title } = body as AnnotationsProps;
          const annotationsData = await api.post<T>(url, {
            title,
            notes,
            priority,
          });
          setNotes(annotationsData.data);
        } else if (method === "delete") {
          const annotationsData = await api.delete<T>(url);
          setNotes(annotationsData.data);
        }
      } catch (err) {
        setError(true);
      } finally {
        setError(false);
        setLoading(false);
      }
    }

    managenerAnnotations();
  }, [url, method, body]);

  return { notes, loading, error };
}
