"use client";

import { useActionState } from "react";
import { createProject } from "./actions";

export function NewProjectForm() {
  const [state, action, pending] = useActionState(createProject, {
    message: "",
    title: "",
    year: "",
    summary: "",
  });

  return (
    <form action={action} className="mt-6 flex w-md flex-col gap-4">
      <input
        name="title"
        defaultValue={state.title}
        placeholder="Title"
        required
        className="border px-4 py-2"
      />
      <input
        name="year"
        type="number"
        defaultValue={state.year}
        placeholder="Year (2000-2100)"
        required
        className="border px-4 py-2"
      />
      <textarea
        name="summary"
        defaultValue={state.summary}
        placeholder="Description"
        required
        rows={3}
        className="border px-4 py-2"
      />
      <label className="flex flex-col gap-1">
        <span className="text-sm text-neutral-500">Image (up to 2MB)</span>
        <input
          name="image"
          type="file"
          accept="image/*"
          required
          className="border px-4 py-2"
        />
      </label>

      {state.message && <p className="text-red-700">{state.message}</p>}
      <button
        disabled={pending}
        className="bg-neutral-900 px-4 py-2 text-white disabled:opacity-50"
      >
        {pending ? "Posting" : "Post project"}
      </button>
    </form>
  );
}
