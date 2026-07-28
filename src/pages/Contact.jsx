import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        "https://sgtweb-rpfo.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          // Keep the backend exactly the same.
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message:
              `Company: ${formData.company || "N/A"}\n\n${formData.message}`,
          }),
        }
      );

      if (res.ok) {
        setStatus("sent");

        setFormData({
          name: "",
          company: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="pt-24 pb-16 bg-white">

        <div className="container-custom">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label eyebrow"
          >
            CONTACT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 font-bold tracking-tight text-slate-900 leading-none"
            style={{
              fontSize: "clamp(3.4rem, 6vw, 5.6rem)",
            }}
          >
            Let's start the
            <br />
            conversation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-text mt-8"
          >
            Whether you're exploring autonomous security for a residential
            estate, university campus, industrial site or municipality,
            we'd love to hear about your requirements.
          </motion.p>

        </div>

      </section>

      {/* =======================================================
          CONTACT
      ======================================================= */}

      <section className="pb-24 bg-white">

        <div className="container-custom">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20">

            {/* LEFT */}

            <div>

              <h2 className="text-4xl font-bold">
                Get in touch.
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                We'd be happy to discuss your project,
                answer any questions or arrange a
                demonstration of SafeGuard.
              </p>

              <div className="mt-12 space-y-10">

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
                    Email
                  </p>

                  <p className="mt-2 text-xl">
                    safeguardtechnologies.za@gmail.com
                  </p>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
                    Location
                  </p>

                  <p className="mt-2 text-xl">
                    Stellenbosch
                    <br />
                    South Africa
                  </p>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
                    Book a Demo
                  </p>

                  <p className="mt-2 text-slate-600 leading-8">
                    Experience SafeGuardOS and ARGUS in action.
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div>

                  <label className="block mb-2 font-medium">
                    Name
                  </label>

                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium">
                    Company
                  </label>

                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium">
                    Email
                  </label>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                  />

                </div>
                                <div>

                  <label className="block mb-2 font-medium">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none resize-none focus:border-blue-600"
                  />

                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "sending"}
                  className="btn btn-primary w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Message Sent"
                    : status === "error"
                    ? "Try Again"
                    : "Send Message"}
                </motion.button>

                {status === "sent" && (
                  <p className="text-green-600 font-medium">
                    Your message has been sent successfully. We'll be in touch soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-600 font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* =======================================================
          PARTNERSHIPS
      ======================================================= */}

      <section className="py-20 bg-slate-50">

        <div className="container-custom max-w-3xl">

          <p className="section-label eyebrow">
            PARTNERSHIPS
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Let's build together.
          </h2>

          <p className="hero-text mt-6">
            SafeGuard is always interested in collaborating with
            research institutions, municipalities, universities,
            security providers and industry partners who share our
            vision for the future of autonomous security.
          </p>

        </div>

      </section>

    </>
  );
}