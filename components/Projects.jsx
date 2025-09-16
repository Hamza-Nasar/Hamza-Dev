// Server Component – no "use client"
import prisma from "@/lib/prisma";
import { Suspense } from "react";

async function ProjectsList() {
    const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, idx) => (
                <a
                    key={p.id}
                    href={p.link || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform shadow-xl"
                >
                    <img
                        src={p.image || "/placeholder.jpg"}
                        alt={p.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-1">{p.title}</h3>
                        <p className="text-gray-300 text-sm">{p.description}</p>
                        <div className="text-xs text-gray-400 mt-3">{p.tech}</div>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                <Suspense fallback={<div className="text-center text-gray-400">Loading...</div>}>
                    <ProjectsList />
                </Suspense>
            </div>
        </section>
    );
}
