import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-6 bg-[rgba(98, 104, 110, 0.9)] shadow-[0_-4px_20px_rgba(0,0,0,0.5)] relative">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-1">
          <Image
            src="/image/logos/Logo.png"
            alt="Valores Logo"
            width={100}
            height={35}
            />
          <Typography className="text-[11px] text-gray-400 leading-snug"
               style={{
                          fontFamily: "TT Commons Pro",
                          fontWeight: 700, // Bold
                        }}  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            © {CURRENT_YEAR} Valores Consultoria e Tecnologia. <br />
            Todos os direitos reservados. <br />
            CNPJ 28.179.189/0001-40
          </Typography>
        </div>

        {/* Middle Section */}
        <div className="flex justify-center text-center">
          <Typography  style={{ fontFamily: "TT Commons Pro",fontWeight: 700, }}
              className="text-xs md:text-sm text-gray-300 font-medium" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Conectando inteligência, eficiência e inovação
          </Typography>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end space-y-1">
          <Typography style={{ fontFamily: "TT Commons Pro",fontWeight: 700, }} className="text-xs text-gray-300"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            nossos@valores.com.br
          </Typography>
          <Typography style={{ fontFamily: "TT Commons Pro",fontWeight: 700, }} className="text-xs text-gray-300"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            (38) 9.9113-6197
          </Typography>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-1">
            <a href="#" className="text-gray-400 hover:text-white text-xs">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xs">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xs">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
