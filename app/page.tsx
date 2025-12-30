import Link from "next/link";

export default function HomePage() {
  return (
      <main className="min-h-dvh bg-neutral-950 text-neutral-100">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-10 shadow-sm">
            <h1 className="text-4xl font-semibold tracking-tight">Пять Букв</h1>
            <p className="mt-4 text-neutral-300">
              Русская игра в слова. Вход через Google и VK ID. Скоро в RuStore.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-200">
              Категории
            </span>
              <span className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-200">
              Ежедневные слова
            </span>
              <span className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-200">
              Премиальный UX
            </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-300">
              <Link className="underline underline-offset-4 hover:text-white" href="/privacy">
                Политика конфиденциальности
              </Link>
              <Link className="underline underline-offset-4 hover:text-white" href="/terms">
                Условия использования
              </Link>
              <Link className="underline underline-offset-4 hover:text-white" href="/support">
                Поддержка
              </Link>
              <Link className="underline underline-offset-4 hover:text-white" href="/delete-account">
                Удаление аккаунта
              </Link>
            </div>

            <p className="mt-10 text-xs text-neutral-500">
              © {new Date().getFullYear()} «Пять Букв»
            </p>
          </div>
        </div>
      </main>
  );
}
