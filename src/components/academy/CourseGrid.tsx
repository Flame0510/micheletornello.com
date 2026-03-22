"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Server, Cpu, Cloud, Database, GitBranch, Layout } from "lucide-react";
import { academy } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const iconMap: Record<string, React.ComponentType<any>> = {
  PHP: Server,
  "Sistemi Operativi": Cpu,
  "Programmazione 1": Code,
  "Cloud Computing": Cloud,
  Angular: Layout,
  React: Code,
  "Sistemi di Versioning": GitBranch,
};

const iconMapEn: Record<string, React.ComponentType<any>> = {
  PHP: Server,
  "Operating Systems": Cpu,
  "Programming 1": Code,
  "Cloud Computing": Cloud,
  Angular: Layout,
  React: Code,
  "Versioning Systems": GitBranch,
};

export default function CourseGrid() {
  const { lang } = useLang();
  const t = translations.academyPage[lang];
  const icons = lang === "it" ? iconMap : iconMapEn;

  return (
    <section className="px-6 max-w-[1120px] mx-auto pb-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "#B87333" }}>
        04
      </p>
      <h2 className="font-display mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#E8E8E8", letterSpacing: "-0.02em" }}>
        {lang === "it" ? "Materie" : "Subjects"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {academy.subjects.map((subject, i) => {
          const Icon = icons[subject.name];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-lg"
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(184,115,51,0.2)",
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="font-mono text-xs" style={{ color: "#B87333" }}>
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl mt-2" style={{ color: "#E8E8E8" }}>
                      {subject.name}
                    </h3>
                  </div>
                  {Icon && <Icon size={32} style={{ color: "#B87333", opacity: 0.7 }} />}
                </div>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "#707070" }}>
                  {subject.description}
                </p>
                <div className="pt-6 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-mono text-xs" style={{ color: "#707070" }}>
                      {t.resourcesLabel} <ExternalLink size={10} />
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ color: "#404040", border: "1px solid rgba(255,255,255,0.06)" }}>
                      {t.comingSoon}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-mono text-xs" style={{ color: "#707070" }}>
                      {t.repositoryLabel} <ExternalLink size={10} />
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ color: "#404040", border: "1px solid rgba(255,255,255,0.06)" }}>
                      {t.comingSoon}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}