import type { ContactPageContent, ContactType, ContactInfo } from '../types'

export const contactPageContent: ContactPageContent = {
  headline: "Зв'яжіться з нами",
  intro: "Чи ви експерт, який хоче зробити внесок, партнер, що шукає співпраці, або інвестор, зацікавлений у майбутньому України — ми будемо раді почути від вас."
}

export const contactTypes: ContactType[] = [
  {
    id: "experts",
    title: "Приєднатися як експерт",
    description: "Внесіть свою експертизу в розробку, міське планування, енергетику, охорону здоров'я або інші галузі, щоб допомогти сформувати міста України зі ШІ.",
    icon: "users"
  },
  {
    id: "partners",
    title: "Стати партнером проекту",
    description: "Дослідіть можливості співпраці для трансферу технологій, дослідницьких ініціатив або стратегічних партнерств у міських інноваціях.",
    icon: "handshake"
  },
  {
    id: "investors",
    title: "Інвестувати в майбутнє України",
    description: "Дізнайтеся про шляхи фінансування та інвестиційні можливості у будівництві Центрів науки інновацій та технологій по всій Україні.",
    icon: "trending-up"
  }
]

export const contactInfo: ContactInfo = {
  email: "go.rozum@ukr.net",
  emailSubject: "Запит з веб-сайту"
}
