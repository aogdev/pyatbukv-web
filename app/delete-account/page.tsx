export default function DeleteAccountPage() {
    return (
        <main className="min-h-dvh bg-neutral-950 text-neutral-100">
            <div className="mx-auto max-w-3xl px-6 py-14">
                <h1 className="text-3xl font-semibold tracking-tight">Удаление аккаунта</h1>

                <div className="mt-8 space-y-5 rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 text-neutral-300">
                    <p>
                        Вы можете запросить удаление аккаунта и связанных с ним данных из приложения «Пять Букв».
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-100">Как удалить аккаунт</h2>
                    <ol className="list-decimal space-y-2 pl-6">
                        <li>
                            Отправьте письмо на <span className="text-neutral-100">support@pyatbukv.ru</span> с темой{" "}
                            <span className="text-neutral-100">«Удаление аккаунта»</span>.
                        </li>
                        <li>
                            В тексте письма укажите способ входа (Google или VK ID) и ваш идентификатор/почту,
                            которая отображается в профиле (если есть).
                        </li>
                        <li>
                            Мы подтвердим запрос и удалим аккаунт в разумный срок.
                        </li>
                    </ol>

                    <h2 className="text-xl font-semibold text-neutral-100">Что будет удалено</h2>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>учётная запись и связанный идентификатор;</li>
                        <li>прогресс, статистика и настройки, привязанные к аккаунту.</li>
                    </ul>

                    <p className="text-sm text-neutral-400">
                        Обратите внимание: провайдеры входа (Google/VK) управляют вашей учётной записью у себя независимо.
                        Удаление в «Пять Букв» не удаляет ваш аккаунт Google или VK.
                    </p>
                </div>
            </div>
        </main>
    );
}
