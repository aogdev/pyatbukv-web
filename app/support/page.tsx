export default function SupportPage() {
    return (
        <main className="min-h-dvh bg-neutral-950 text-neutral-100">
            <div className="mx-auto max-w-3xl px-6 py-14">
                <h1 className="text-3xl font-semibold tracking-tight">Поддержка</h1>

                <div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 text-neutral-300">
                    <p>
                        Если у вас есть вопросы, предложения или проблемы с приложением — напишите нам:
                    </p>

                    <p className="mt-4 text-lg text-neutral-100">support@pyatbukv.ru</p>

                    <p className="mt-6 text-sm text-neutral-400">
                        В письме желательно указать модель устройства и версию Android, а также краткое описание проблемы.
                    </p>
                </div>
            </div>
        </main>
    );
}
