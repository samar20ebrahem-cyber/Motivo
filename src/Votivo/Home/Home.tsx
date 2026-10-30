import imgHome from '../../assets/images/home1.png';
export function Home() {
    return (
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-24">
            <div className="w-full max-w-xl flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#34483A]/20 bg-[#fcf4dc] px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#34483A]"></span>
                    <p className="text-sm font-semibold text-[#34483A]"> Your AI Learning Companion</p>
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-tight text-[#34483A] sm:text-5xl lg:text-6xl">
                    Learn Smarter, Understand Deeper.
                </h1>

                <p className="mt-5 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
                    Turn your study materials into clear explanations,
                    interactive mind maps, and smarter practice.
                </p>

                <ul className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[#34483A] lg:justify-star">
                    <li>Understand more.</li>
                    <li>Memorize better.</li>
                    <li>Achieve more.</li>
                </ul>
                <button className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-[#34483A] px-8 py-4 text-base font-semibold text-[#FCF4DC] shadow-lg shadow-[#34483A]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#28382D] hover:shadow-xl active:translate-y-0">
                    Start Learning
                </button>
            </div>

            <div className="hero-image">
                <img src={imgHome}
                    alt="AI-powered learning visualization"
                    className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>

        </section>
    )
}
