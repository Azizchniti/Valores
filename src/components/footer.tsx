import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#4FB3B6] py-10 ">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <Image
            src="/image/logos/Logo.png"
            alt="Valores Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <Typography className="text-xs md:text-sm text-white leading-relaxed font-semibold" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            © {CURRENT_YEAR} Valores Consultoria e Tecnologia. <br />
            Todos os direitos reservados.
          </Typography>
        </div>

        {/* Middle Section */}
        <div className="flex justify-center">
          <Typography className="text-sm md:text-base text-white font-bold text-center" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            CONECTANDO <span className="font-extrabold">INTELIGÊNCIA</span>, <span className="font-extrabold">EFICIÊNCIA</span> E <span className="font-extrabold">INOVAÇÃO</span>!
          </Typography>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-2">
             {/* Social Icons */}
          <div className="flex space-x-5 mt-3 text-white text-lg">
            <a
              href="https://www.linkedin.com/company/valoressoluções/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000] transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/valoressolucoes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000] transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/valoressolucoes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000] transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <Typography className="text-xs md:text-sm text-white font-semibold"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            nossos@valores.com.br
          </Typography>

          <Typography className="text-xs md:text-sm text-white font-semibold" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <a
              href="https://wa.me/5538991136197"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              +55 (38) 99113-6197
            </a>
          </Typography>

       
        </div>

      </div>
    </footer>
  );
}

export default Footer;
