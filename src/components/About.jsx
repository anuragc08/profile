import { motion } from 'framer-motion'
import { profile } from '../data/profile'


export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-page">
            <div className="max-w-5xl mx-auto">
                <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-6">About</motion.h2>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-glass p-6 md:p-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300">{profile.about}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'TypeScript'].map(s => (
                            <span key={s} className="tag-chip">{s}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}