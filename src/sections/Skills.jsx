import React from 'react';
import { Code2, Terminal, Cpu, Globe } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Skills = () => {
    const skills = [
        { name: "React", icon: <Code2 size={24} />, level: "Advanced" },
        { name: "Node.js", icon: <Terminal size={24} />, level: "Advanced" },
        { name: "System Design", icon: <Cpu size={24} />, level: "Intermediate" },
        { name: "Web Performance", icon: <Globe size={24} />, level: "Advanced" }
    ];

    return (
        <Section id="skills" className="bg-slate-50 dark:bg-slate-800/20">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
                <p className="text-slate-600 dark:text-slate-400">Tools and technologies I use to bring ideas to life</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, idx) => (
                    <Card key={idx} className="flex flex-col items-center text-center p-8 hover:-translate-y-2">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                            {skill.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{skill.name}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-500">{skill.level}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
