// Only needed if you plan to add interactivity like toast messages
'use client';

export default function SubscribeForm() {
  return (
    <form
      className="footer-subscribe-form"
      action="https://app.convertkit.com/forms/8280907/subscriptions"
      method="post"
      data-uid="496b4d7cec"
      target="_blank" // Optional: prevents page reload
    >
      <input
        type="email"
        name="email_address"
        placeholder="Enter your email"
        required
        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[#05b9b5] text-white rounded-r-md hover:bg-teal-600 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
