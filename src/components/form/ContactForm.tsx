import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      setStatus("success");
      alert("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form text-center mx-auto">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full name *"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="form-group mb-0">
            <textarea
              name="message"
              className="form-control"
              placeholder="Write your message *"
              required
            />
          </div>
        </div>
      </div>

      <button
        className="default-btn"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
