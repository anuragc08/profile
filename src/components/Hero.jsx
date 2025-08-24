import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section id="home" className="min-h-screen bg-page flex items-center justify-center text-center px-6">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400"
                >
                    Hi, I'm {profile.name}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="mt-4 text-xl md:text-2xl text-indigo-500 font-semibold"
                >
                    {profile.roles.join(' • ')}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                >
                    {profile.about}
                </motion.p>
                <div className="mt-8 flex justify-center gap-3">
                    <Link to="/projects" className="btn-primary">View Projects</Link>
                    <Link 
                        to="/contact" 
                        className="px-4 py-2 rounded-xl bg-gray-800 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    )
}
