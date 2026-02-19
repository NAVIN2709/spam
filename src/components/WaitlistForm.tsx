import { useState } from "react";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    accommodationType: "hostel",
    campusAmbassador: false,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Simulated submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        accommodationType: "hostel",
        campusAmbassador: false,
      });
    } catch (error) {
      console.error("Submission failed", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-10 bg-white border border-slate-200 rounded-xl text-center max-w-2xl mx-auto">
        <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-7 h-7 text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          You're on the list!
        </h3>
        <p className="text-base text-slate-600">
          We'll reach out when SPAM launches at NIT Trichy.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 bg-white border border-slate-200 rounded-xl max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none transition-colors text-base"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none transition-colors text-base"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none transition-colors text-base"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Accommodation
          </label>
          <select
            required
            value={formData.accommodationType}
            onChange={(e) =>
              setFormData({ ...formData, accommodationType: e.target.value })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none transition-colors text-base"
          >
            <option value="hostel">Hostel</option>
            <option value="day_scholar">Day Scholar</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="ambassador"
            checked={formData.campusAmbassador}
            onChange={(e) =>
              setFormData({ ...formData, campusAmbassador: e.target.checked })
            }
            className="w-5 h-5 border border-slate-300 rounded focus:ring-1 focus:ring-slate-700"
          />
          <label htmlFor="ambassador" className="text-base text-gray-700">
            I want to become a campus ambassador
          </label>
        </div>

        {status === "error" && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">
              Something went wrong. Please try again.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-8 py-3 bg-gray-900 text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Submitting..." : "Join the waitlist"}
        </button>
      </div>
    </form>
  );
}
