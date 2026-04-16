import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

import { toast } from "sonner";

export default function ContactSection() {
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully!", {
      description: "We will get back to you shortly.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative px-6 py-16 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-neon-orange uppercase">
            Contact Us
          </span>
          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Let's <span className="text-gradient-neon">Connect</span>
          </h2>
          <p className="mb-10 text-muted-foreground leading-relaxed">
            Ready to transform your trading operations? Reach out and let's discuss how we can work
            together.
          </p>

          <div className="space-y-6">
            {[
              {
                l: "Email",
                v: "info@globaltraders.com",
                icon: Mail,
                color: "text-neon-green",
              },
              {
                l: "Phone",
                v: "+1 (555) 123-4567",
                icon: Phone,
                color: "text-neon-blue",
              },
              {
                l: "Location",
                v: "New York, USA",
                icon: MapPin,
                color: "text-neon-orange",
              },
            ].map((c) => (
              <div key={c.l} className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <c.icon className={`h-5 w-5 ${c.color}`} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">{c.l}</p>
                  <p className="font-semibold text-foreground">{c.v}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="glass-card rounded-3xl p-6 sm:p-8 md:p-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          {[
            { name: "name", label: "Your Name", type: "text" },
            { name: "email", label: "Email Address", type: "email" },
            { name: "subject", label: "Subject", type: "text" },
          ].map((f) => (
            <div key={f.name} className="mb-6">
              <label className="mb-2 block text-sm text-muted-foreground">{f.label}</label>
              <motion.input
                required
                name={f.name}
                type={f.type}
                value={formData[f.name as keyof typeof formData]}
                onChange={handleChange}
                onFocus={() => setFocused(f.name)}
                onBlur={() => setFocused("")}
                className="w-full rounded-xl border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300"
                style={{
                  borderColor: focused === f.name ? "var(--neon-green)" : "var(--border)",
                  boxShadow: focused === f.name ? "0 0 15px oklch(0.80 0.22 150 / 20%)" : "none",
                }}
              />
            </div>
          ))}
          <div className="mb-6">
            <label className="mb-2 block text-sm text-muted-foreground">Message</label>
            <motion.textarea
              required
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused("msg")}
              onBlur={() => setFocused("")}
              className="w-full rounded-xl border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 resize-none"
              style={{
                borderColor: focused === "msg" ? "var(--neon-green)" : "var(--border)",
                boxShadow: focused === "msg" ? "0 0 15px oklch(0.80 0.22 150 / 20%)" : "none",
              }}
            />
          </div>
          <motion.button
            disabled={loading}
            type="submit"
            className="w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground disabled:opacity-50"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px oklch(0.80 0.22 150 / 40%)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
