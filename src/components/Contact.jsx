import { profile } from '../data/profile'

export default function Contact() {
    const { email, mob, github, linkedin } = profile

    return (
        <section className="min-h-screen bg-page px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gray-100 ">Contact</h2>
            <p className="text-gray-600 dark:text-gray-300">Feel free to reach out 👇</p>
            <div className="mt-6 space-y-4">
                <p>Email: <a href={`mailto:${email}`} className="text-indigo-500">{email}</a></p>
                <p>Phone: <a href={`tel:${mob}`} className="text-indigo-500">{mob}</a></p>
                <div className="flex justify-center gap-6 mt-4">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">GitHub</a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">LinkedIn</a>
                </div>
            </div>
        </section>
    )
}
