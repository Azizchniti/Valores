import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#4FB3B6] to-[#3aa2a5] pt-14 pb-8 overflow-hidden">
      
      {/* subtle top glow */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white/5 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP ROW */}
        <div className="grid md:grid-cols-3 items-end gap-8 min-h-[140px]">

          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
            <Image
              src="/image/logos/Logo.png"
              alt="Valores Logo"
              width={130}
              height={40}
              className="object-contain"
            />

            <Typography className="text-sm md:text-sm text-white font-semibold"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              © {CURRENT_YEAR} Valores Consultoria e Tecnologia.
            </Typography>

            <Typography className="text-sm text-white/70"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Todos os direitos reservados.
            </Typography>
          </div>

          {/* MIDDLE SPACER */}
          <div className="hidden md:block" />

          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-end space-y-3">

            {/* SOCIALS (GLASS STYLE) */}
            <div className="flex gap-3">
              {[
                {
                  icon: "fa-linkedin-in",
                  link: "https://www.linkedin.com/company/valoressoluções/",
                },
                {
                  icon: "fa-instagram",
                  link: "https://www.instagram.com/valoressolucoes/",
                },
                {
                  icon: "fa-facebook-f",
                  link: "https://www.facebook.com/valoressolucoes",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-xl bg-white/10 backdrop-blur-md
                    text-white text-sm
                    border border-white/20
                    hover:bg-white hover:text-[#4FB3B6]
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  <i className={`fab ${item.icon}`} />
                </a>
              ))}
            </div>

            <p className="text-white text-base font-medium opacity-90">
              nossos@valoressolucoes.com.br
            </p>

            <a
              href="https://wa.me/553187954089"
              target="_blank"
              className="
                text-white text-base font-semibold
                hover:opacity-80 transition
              "
            >
              +55 (31) 8795-4089
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/15 my-8" />

        {/* SLOGAN */}
        <div className="text-center px-4">
          <p className="text-white text-sm md:text-base font-semibold tracking-wide leading-relaxed">
            CONECTANDO{" "}
            <span className="font-extrabold text-white">
              INTELIGÊNCIA
            </span>
            ,{" "}
            <span className="font-extrabold text-white">
              EFICIÊNCIA
            </span>{" "}
            E{" "}
            <span className="font-extrabold text-white">
              INOVAÇÃO
            </span>
            !
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;