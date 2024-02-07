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
  const [annotations, setAnnotations] = useState<T | T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { _id, notes, priority, title } = body as AnnotationsProps;

  useEffect(() => {
    async function managenerAnnotations() {
      try {
        setLoading(true);
        if (method === "get") {
          const data = (await api.get<T[]>(url)) as unknown as T[];
          setAnnotations(data);
        } else if (method === "post") {
          const data = (await api.post<T>(url, {
            title,
            notes,
            priority,
          })) as unknown as T;
          setAnnotations(data);
        } else if (method === "delete") {
          const data = (await api.delete<T>(url)) as unknown as T;
          setAnnotations(data);
        }
      } catch (err) {
        setError(true);
      } finally {
        setError(false);
        setLoading(false);
      }
    }

    managenerAnnotations();
  }, [url, method, body, title, notes, priority]);
  return {};
}
