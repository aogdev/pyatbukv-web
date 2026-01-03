// components/screens/SupportScreen.tsx
import React from "react";

export default function SupportScreen() {
    return (
        <main>
            <section className="legal">
                <h1>Поддержка</h1>
                <div className="meta">
                    Мы отвечаем на обращения и учитываем предложения по улучшениям.
                </div>

                <h2>Куда писать</h2>
                <p>
                    <b>pyatbukv@list.ru</b>
                </p>

                <h2>Что указать в письме</h2>
                <ul>
                    <li>модель устройства и версию Android;</li>
                    <li>способ входа (Google или VK ID);</li>
                    <li>краткое описание проблемы и, по возможности, скриншот.</li>
                </ul>
            </section>
        </main>
    );
}
