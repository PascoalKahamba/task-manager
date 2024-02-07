import { useState } from "react";

export default function useFetch<T>(url: string) {
  const [notes, setNotes] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return {};
}
