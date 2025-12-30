export default function TermsPage() {
    const updated = "31.12.2025";

    return (
        <main className="min-h-dvh bg-neutral-950 text-neutral-100">
            <div className="mx-auto max-w-3xl px-6 py-14">
                <h1 className="text-3xl font-semibold tracking-tight">Условия использования</h1>
                <p className="mt-2 text-sm text-neutral-400">Дата обновления: {updated}</p>

                <section className="mt-10 space-y-6 text-neutral-300">
                    <p>
                        «Пять Букв» — развлекательное приложение. Используя приложение, вы соглашаетесь
                        соблюдать данные Условия.
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-100">1. Аккаунт</h2>
                    <p>
                        Вход возможен через Google и VK ID. Вы несёте ответственность за безопасность
                        доступа к вашему аккаунту у соответствующего провайдера.
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-100">2. Использование</h2>
                    <p>
                        Запрещено пытаться нарушать работу приложения, получать несанкционированный доступ,
                        использовать ботов и иные способы обхода ограничений.
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-100">3. Интеллектуальные права</h2>
                    <p>
                        Приложение, интерфейс, тексты и иные материалы защищены законодательством.
                        Запрещено копирование и распространение без разрешения правообладателя.
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-100">4. Ограничение ответственности</h2>
                    <p>
                        Приложение предоставляется «как есть». Мы не гарантируем бесперебойную работу,
                        но стремимся оперативно исправлять ошибки.
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-100">5. Контакты</h2>
                    <p>
                        Поддержка: <span className="text-neutral-200">support@pyatbukv.ru</span>
                    </p>
                </section>
            </div>
        </main>
    );
}
