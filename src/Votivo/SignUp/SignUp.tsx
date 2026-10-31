import { Link } from 'react-router-dom'
import { supabase } from '../../Supabase/supabase'
import { useState } from 'react'
export function SignUp() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!fullName || !email || !password || !confirmPassword) {
            alert("Please fill in all fields")
            return
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters')
            return
        }

        try {
            setLoading(true)
            setMessage('')
            const { error } = await supabase.auth.signUp({
                email: email.trim(),
                password: password,
                options: {
                    data: {
                        full_name: fullName.trim(),
                    },
                },
            })
            setLoading(false)
            if (error) {
                setMessage(error.message)
                return
            }

            setMessage('Account created successfully! Please check your email.')
        }
        catch {
            setMessage('Something went wrong. Please try again.')

        } finally {
            setLoading(false)
        }
    }
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
                    <form className="mt-6 flex flex-col gap-4" onSubmit={handleSignUp}>
                        <input
                            type="text"
                            placeholder='Full Name'
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10"
                        />

                        <input
                            type="email"
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10"
                        />

                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10"
                        />

                        <input
                            type="password"
                            placeholder='Confirm Password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10"
                        />

                        {message && (
                            <p className="text-sm text-center text-[#34483A]">
                                {message}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-2 w-full rounded-xl bg-[#34483A] px-4 py-3 font-semibold text-[#FCF4DC] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#28382D] hover:shadow-md"
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
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