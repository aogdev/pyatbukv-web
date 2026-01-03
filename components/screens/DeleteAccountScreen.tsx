// components/pages/DeleteAccountPage.tsx
import React from "react";

export default function DeleteAccountScreen() {
    return (
        <main>
            <section className="legal">
                <h1>Удаление аккаунта</h1>
                <div className="meta">Пока — по запросу через поддержку.</div>

                <h2>Как удалить аккаунт</h2>
                <ol>
                    <li>
                        Отправьте письмо на <b>pyatbukv@list.ru</b> с темой{" "}
                        <b>«Удаление аккаунта»</b>.
                    </li>
                    <li>
                        Укажите способ входа (Google или VK ID) и данные, по которым можно
                        найти аккаунт (например, email, отображаемый в профиле).
                    </li>
                    <li>
                        Мы подтвердим запрос и удалим аккаунт и связанные данные{" "}
                        <b>в течение 30 календарных дней</b>.
                    </li>
                </ol>

                <h2>Что будет удалено</h2>
                <ul>
                    <li>учётная запись и связанный идентификатор;</li>
                    <li>прогресс, статистика и настройки, привязанные к аккаунту.</li>
                </ul>

                <p>
                    Важно: удаление аккаунта в «Пять Букв» не удаляет ваш аккаунт Google
                    или VK ID.
                </p>
            </section>
        </main>
    );
}
