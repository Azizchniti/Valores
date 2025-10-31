import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-10 bg-[rgba(0,0,0,0.65)] backdrop-blur-sm border-t border-gray-600/40 text-gray-300">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center text-center md:text-left">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-3 mb-6 md:mb-0">
          <Image
            src="/image/logos/Logo.png"
            alt="Valores Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <Typography
            className="text-[11px] leading-relaxed text-gray-400"
            style={{
              fontFamily: "Luxora Grotesk",
              fontWeight: 700,
            }}  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            © {CURRENT_YEAR} Valores Consultoria e Tecnologia. <br />
            Todos os direitos reservados. <br />
            CNPJ 28.179.189/0001-40
          </Typography>
        </div>

        {/* Middle Section */}
        <div className="flex justify-center mb-6 md:mb-0">
          <Typography
            className="text-sm md:text-base text-gray-200 italic"
            style={{
              fontFamily: "Luxora Grotesk",
              fontWeight: 700,
            }}  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            “Conectando inteligência, eficiência e inovação”
          </Typography>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <Typography
            className="text-xs md:text-sm text-gray-300 hover:text-[#58a8ab] transition"
            style={{
              fontFamily: "Luxora Grotesk",
              fontWeight: 700,
            }}  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            nossos@valores.com.br
          </Typography>

          <Typography
            className="text-xs md:text-sm text-gray-300 hover:text-[#58a8ab] transition cursor-pointer"
            style={{
              fontFamily: "Luxora Grotesk",
              fontWeight: 700,
            }}  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <a
              href="https://wa.me/5538991136197"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
             +55 (38) 9.9113-6197
            </a>
          </Typography>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-3">
            <a
              href="https://www.facebook.com/valoressolucoes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58a8ab] transition text-lg"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/valoressolucoes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58a8ab] transition text-lg"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/valoressoluções/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58a8ab] transition text-lg"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
