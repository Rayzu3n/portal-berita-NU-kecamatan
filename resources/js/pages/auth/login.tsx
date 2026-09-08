import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

/**
 * NOTE: this is a functional placeholder for Milestone 2 (auth backend)
 * testing purposes only. The final Stitch-designed login screen is part
 * of Milestone 8 and should replace this markup without changing the
 * form submission logic below.
 */
export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <>
            <Head title="Masuk" />
            <div className="bg-surface-warm flex min-h-screen items-center justify-center px-4">
                <form
                    onSubmit={submit}
                    className="bg-surface-card w-full max-w-sm rounded-lg p-6 shadow-sm"
                >
                    <h1 className="mb-4 text-lg font-semibold">Masuk</h1>

                    <div className="mb-3">
                        <label htmlFor="email" className="mb-1 block text-sm">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full rounded border px-3 py-2 text-sm"
                            autoFocus
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="mb-1 block text-sm">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full rounded border px-3 py-2 text-sm"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-brand-primary w-full rounded py-2 text-sm text-white disabled:opacity-50"
                    >
                        Masuk
                    </button>
                </form>
            </div>
        </>
    );
}
