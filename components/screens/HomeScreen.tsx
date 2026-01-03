// components/screens/HomeScreen.tsx
import React from "react";
import {
    BookOpenText,
    Layers,
    Image as ImageIcon,
    BarChart3,
    Users,
} from "lucide-react";

const FEATURES = [
    {
        title: "Словесная игра на русском",
        subtitle:
            "Вдохновлено форматом Wordle. Вспоминайте слова, открывайте их значение и смысл.",
        Icon: BookOpenText,
        color: "var(--i-blue)",
    },
    {
        title: "Категории",
        subtitle: "Темы на выбор — от животных до истории.",
        Icon: Layers,
        color: "var(--i-green)",
    },
    {
        title: "Описание и иллюстрация",
        subtitle: "Значение слова и иллюстрация после разгадки.",
        Icon: ImageIcon,
        color: "var(--i-amber)",
    },
    {
        title: "Прогресс и личная статистика",
        subtitle: "Следите за результатами и ростом со временем.",
        Icon: BarChart3,
        color: "var(--i-sky)",
    },
    {
        title: "Глобальная статистика",
        subtitle: "Сравните свой путь с тем, как решают другие игроки.",
        Icon: Users,
        color: "var(--i-violet)",
    },
] as const;

export default function HomeScreen() {
    return (
        <section className="aboutBlock">
            <div className="aboutTitle">О проекте</div>

            <div className="aboutInner">
                <div className="infoCardWeb">
                    {FEATURES.map((f) => (
                        <div key={f.title} className="infoLineWeb">
                            <div className="infoIconWeb" aria-hidden>
                                <f.Icon size={16} color={f.color} />
                            </div>

                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div className="infoTitleWeb">{f.title}</div>
                                <div className="infoSubtitleWeb">{f.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
