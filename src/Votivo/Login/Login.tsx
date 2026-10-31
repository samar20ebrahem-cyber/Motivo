import { Link } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../../Supabase/supabase'
import { useNavigate } from 'react-router-dom'
export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!email.trim() || !password) {
            setMessage('Please enter your email and password')
            return
        }

        try {
            setLoading(true)
            setMessage('')

            const { error } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password: password,
            })

            if (error) {
                setMessage(error.message)
                return
            }

            navigate('/')

        } catch {
            setMessage('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <section className="min-h-screen bg-[#FCF4DC] px-6 py-8">
                <div className="mx-auto mt-12 w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                    <h3 className="text-3xl font-bold text-[#34483A]">
                        Welcome back
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#667368]">
                        Sign in to continue building your visual learning workspace.
                    </p>

                    <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm font-semibold text-[#34483A] transition-colors duration-300 hover:bg-[#34483A]/5">
                        <i></i>
                        <p>Continue with Google</p>
                    </button>
                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px flex-1 bg-[#34483A]/20"></div>
                        <span className="text-xs text-[#667368]">OR USE EMAIL</span>
                        <div className="h-px flex-1 bg-[#34483A]/20"></div>
                    </div>

                    <form
                        className="mt-6 flex flex-col gap-4"
                        onSubmit={handleLogin}>

                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10"
                        />

                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full rounded-xl border border-[#34483A]/20 bg-white px-4 py-3 text-sm text-[#34483A] outline-none transition-all duration-300 placeholder:text-[#667368]/70 focus:border-[#34483A] focus:ring-2 focus:ring-[#34483A]/10"
                        />

                        <div className="flex justify-end">
                            <a href="#"
                                className="text-sm font-medium text-[#34483A] transition-colors hover:text-[#667368] hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        {message && (
                            <p className="text-center text-sm text-[#34483A]">
                                {message}
                            </p>
                        )}
                        <button
                            disabled={loading}
                            type="submit"
                            className="mt-2 w-full rounded-xl bg-[#34483A] px-4 py-3 font-semibold text-[#FCF4DC] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#28382D] hover:shadow-md">
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>

                    </form>

                    <p className="mt-6 text-center text-sm text-[#667368]">
                        Don't have an account?
                        <Link to="/signup" className="ml-1 font-semibold text-[#34483A] hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </section>
        </>
    )
}
