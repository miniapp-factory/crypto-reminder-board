"use client";

import { useState } from "react";

export default function CryptoReminderBoard() {
  const [reminders, setReminders] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addReminder = () => {
    if (!input.trim()) {
      setError("Please enter a reminder before adding.");
      return;
    }
    setReminders([...reminders, input.trim()]);
    setInput("");
    setError("");
  };

  const deleteReminder = (index: number) => {
    setReminders(reminders.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setReminders([]);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="New Reminder"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
        />
        <button
          onClick={addReminder}
          className="bg-blue-500 text-white rounded px-3 py-1"
        >
          Add Reminder
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <h2 className="text-lg font-semibold">Your Reminders</h2>
      {reminders.length === 0 ? (
        <p className="text-muted-foreground">No reminders yet.</p>
      ) : (
        <ul className="space-y-2">
          {reminders.map((rem, idx) => (
            <li key={idx} className="flex justify-between items-center border rounded px-2 py-1">
              <span>{rem}</span>
              <button
                onClick={() => deleteReminder(idx)}
                className="text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {reminders.length > 0 && (
        <button
          onClick={clearAll}
          className="mt-2 text-sm text-gray-600"
        >
          Clear All
        </button>
      )}
    </div>
  );
}
