import { CardsHomeData } from './CardsHome.ts'
export function CardsHome() {
    return (
        <>
            <section className="w-full px-6 py-20">
                <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        CardsHomeData.map((item) => {
                            const Icon = item.icon
                            return (
                                <div key={item.id} className="rounded-2xl border border-[#34483A]/10 bg-[#FCF4DC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#34483A]/10 text-[#34483A]">
                                    <Icon className="text-2xl" />
                                    </div>
                                    <h2 className="mb-3 text-xl font-bold text-[#34483A]">{item.title}</h2>
                                    <p  className="text-sm leading-7 text-[#667368]">{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}