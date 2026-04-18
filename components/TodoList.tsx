'use client';

import { useEffect, useState } from 'react';
import { getTodos } from '@/lib/todos';

export function TodoList() {
  const [todos, setTodos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("Loading todos...", todos);

  useEffect(() => {
    async function load() {
      try {
        const data = await getTodos();
        setTodos(data || []);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}