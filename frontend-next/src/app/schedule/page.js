"use client";

import { useState } from "react";

export default function SchedulePage() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateSchedule = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/schedule", {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch schedule");
      }

      const data = await res.json();
      setSchedule(data);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch schedule. Is backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10 text-gray-900">
      {/* Header */}
      <h1 className="text-3xl font-semibold mb-2">
        Interview Schedule Dashboard
      </h1>
      <p className="text-gray-600 mb-6">
        Automatically generated using skill matching and availability
      </p>

      {/* Button */}
      <button
        onClick={generateSchedule}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Schedule"}
      </button>

      {/* Error */}
      {error && (
        <div className="mt-4 text-red-600 font-medium">
          {error}
        </div>
      )}

      {/* Table */}
      {schedule.length > 0 ? (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left">Candidate</th>
                <th className="p-4 text-left">Interviewer</th>
                <th className="p-4 text-left">Time Slot</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">
                    {row.candidate}
                  </td>
                  <td className="p-4">
                    {row.interviewer}
                  </td>
                  <td className="p-4 text-gray-700">
                    {row.slot}
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && (
          <div className="mt-6 text-gray-600">
            No schedule generated yet. Click <b>Generate Schedule</b>.
          </div>
        )
      )}
    </div>
  );
}
