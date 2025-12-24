"use client";

export default function FooterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
    };

    console.log(data);
    // future: API / WhatsApp / EmailJS
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-[420px] ml-auto">
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full px-4 py-2.5 rounded-md text-black bg-white"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Email id"
        className="w-full px-4 py-2.5 rounded-md text-black bg-white"
      />

      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone"
        className="w-full px-4 py-2.5 rounded-md text-black bg-white"
      />

      <input
        type="text"
        name="city"
        placeholder="Your city"
        className="w-full px-4 py-2.5 rounded-md text-black bg-white"
      />

      <button
        type="submit"
        className="w-full bg-red-600 py-3 rounded-md font-semibold tracking-wide hover:bg-red-700 transition"
      >
        Submit Now!
      </button>
    </form>
  );
}
