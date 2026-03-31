import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const BEZDEP_CARDS = [
  {
    image: "https://cdn.poehali.dev/projects/dbfde696-d90c-4933-bbc8-9e70bae6bd8c/bucket/fdf96737-d32b-4c6f-b56f-d8f6a53a93d5.jpg",
    title: "CABURA",
    description: "Эксклюзивный промокод на бонус при регистрации",
    badge: "ГОРЯЧЕЕ",
    href: "https://caburka.click/?ref=224644",
  },
  {
    image: "https://cdn.poehali.dev/projects/dbfde696-d90c-4933-bbc8-9e70bae6bd8c/bucket/3d3665e0-2b6c-4452-8d04-95bccb68d72d.png",
    title: "SMOKY",
    description: "Бесплатные спины и кэшбэк для новых игроков",
    badge: "ТОП",
    href: "https://smoky.best/i/13911",
  },
  {
    image: "https://cdn.poehali.dev/projects/dbfde696-d90c-4933-bbc8-9e70bae6bd8c/bucket/0206e398-814a-4b68-946b-45bb51f4ead5.jpg",
    title: "CANDY",
    description: "Бонус 100% + 100 фриспинов, промокод: BEZZDEP",
    badge: "VIP",
    href: "https://candy4.best/go/64469",
  },
];

const Bezdep = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="/"
            className="font-display font-black text-2xl tracking-widest uppercase bg-gradient-to-r from-[#00e600] via-[#7fff00] to-[#00e600] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,230,0,0.8)]"
          >
            BEZDEP
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="/#promos" className="text-muted-foreground hover:text-accent transition-colors">
              Промокоды
            </a>
          </nav>
          <a
            href="#cards"
            className="px-5 py-2.5 text-sm font-bold bg-gradient-to-r from-[#00e600] to-[#7fff00] text-black rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all uppercase tracking-wider"
          >
            Получить бонус
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/dbfde696-d90c-4933-bbc8-9e70bae6bd8c/bucket/35168046-a421-4574-af79-51c6ca117b0e.png')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Scanline */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00e600]/30 to-transparent animate-scanline" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[#00e600]/60" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-[#00e600]/60" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-[#00e600]/60" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[#00e600]/60" />

        {/* Content */}
        <div
          className={`relative z-10 text-center px-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 inline-block">
            <span className="text-xs font-bold tracking-[0.4em] text-[#00e600]/90 uppercase border border-[#00e600]/40 px-4 py-1.5 rounded-full">
              Бездепозитные бонусы
            </span>
          </div>

          <h1
            className="text-7xl lg:text-9xl font-black tracking-widest uppercase mt-6 mb-6 drop-shadow-[0_0_30px_rgba(0,230,0,0.6)]"
            style={{
              fontFamily: '"Manrope", system-ui, sans-serif',
              background: "linear-gradient(180deg, #ffffff 0%, #00e600 50%, #7fff00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BEZDEP
          </h1>

          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Бонусы без депозита — играй бесплатно и выигрывай реальные деньги
          </p>

          <a
            href="#cards"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00e600] to-[#7fff00] text-black rounded-full font-black text-lg uppercase tracking-widest hover:shadow-2xl hover:shadow-[#00e600]/60 transition-all hover:scale-105"
          >
            Получить бонус
            <Icon name="ArrowDown" size={20} />
          </a>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-[#00e600]/70 uppercase">
              Доступно прямо сейчас
            </span>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mt-4 mb-4">
              <span
                style={{
                  background: "linear-gradient(90deg, #ffffff, #00e600)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Бездепозитные бонусы
              </span>
            </h2>
            <p className="text-white/50 text-base max-w-md mx-auto">
              Нажмите на карточку — перейдёте прямо на сайт казино с активным бонусом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BEZDEP_CARDS.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-8 rounded-2xl border border-[#00e600]/20 bg-[#030d03] hover:border-[#00e600]/70 hover:bg-[#050f05] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00e600]/30 cursor-pointer"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#00e600]/20 text-[#00e600] border border-[#00e600]/40 tracking-widest">
                    {card.badge}
                  </span>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00e600]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-5 border border-[#00e600]/10">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3
                    className="text-2xl font-black tracking-widest uppercase mb-3"
                    style={{
                      background: "linear-gradient(90deg, #ffffff, #00e600)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {card.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">{card.description}</p>

                  <div className="flex items-center gap-2 text-[#00e600] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Получить бонус
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[#00e600]/10 text-center text-white/30 text-sm px-6">
        <p>© 2026 BEZDEP — все бонусы проверены редакцией</p>
      </footer>
    </div>
  );
};

export default Bezdep;
