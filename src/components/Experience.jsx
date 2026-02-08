import { Briefcase, Calendar, Building2 } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            company: "Synture Solutions Private Limited",
            role: "Software Developer",
            date: "Dec 2025 - Present",
            description: [
                "Spearheading the end-to-end development of dynamic corporate websites and complex web applications.",
                "Designing and implementing responsive, user-centric interfaces for seamless cross-device compatibility.",
                "Optimizing frontend performance and integrating robust backend APIs for enterprise-grade solutions.",
                "Ensuring code quality through modular component architecture and rigorous testing standards."
            ],
        },
    ];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto" id="experience">
            <h2 className="text-4xl font-bold text-center mb-16">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Professional Experience
                </span>
            </h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-blue-400">
                            <Briefcase size={20} />
                        </div>

                        {/* Content Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                                <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                                <span className="text-xs font-medium px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 flex items-center gap-1">
                                    <Calendar size={12} />
                                    {exp.date}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mb-4 text-slate-300">
                                <Building2 size={16} className="text-purple-400" />
                                <span className="font-medium">{exp.company}</span>
                            </div>

                            <ul className="space-y-2 text-slate-400 text-sm list-disc list-inside marker:text-blue-500">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
