import { Link } from 'react-router-dom'
export function SignUp() {
    return (
        <>
            <section className="min-h-screen bg-[#FCF4DC] px-6 py-8">

                <div className="mx-auto mt-12 w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                    <h3 className="text-3xl font-bold text-[#34483A]">Create an account</h3>
                    <p className="mt-3 text-sm leading-7 text-[#667368]">Join Lumora AI and start your visual learning journey.</p>

                    <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm font-semibold text-[#34483A] transition-colors duration-300 hover:bg-[#34483A]/5">
                        <p>Continue with Google</p>
                        <i></i>
                    </button>

                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px flex-1 bg-[#34483A]/20"></div>
                        <span className="text-xs text-[#667368]">OR USE EMAIL</span>
                        <div className="h-px flex-1 bg-[#34483A]/20"></div>
                    </div>
                    <form className="mt-6 flex flex-col gap-4">
                        <input type="text" placeholder='Full Name' className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10" />
                        <input type="email" placeholder='Email' className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10" />

                        <input type="password" placeholder='Password' className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10" />
                        <input type="password" placeholder='Confirm Password' className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10" />
                        <button type="submit" className="mt-2 w-full rounded-xl bg-[#34483A] px-4 py-3 font-semibold text-[#FCF4DC] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#28382D] hover:shadow-md">Create Account</button>
                    </form>

                    <p className="mt-6 text-center text-sm text-[#667368]">
                        Already have an account?
                        <Link to="/login" className="ml-1 font-semibold text-[#34483A] hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>
            </section>
        </>
        // Supabase 
    )
}