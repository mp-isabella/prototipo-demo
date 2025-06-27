"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const CajaSuscripcion = () => {
  const { theme } = useTheme();
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
  }, []);

  const colorStop = theme === "light" ? "#4A6CF7" : "#fff";

  if (!montado) {
    return null;
  }

  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
        Suscríbete para recibir novedades
      </h3>
      <p className="border-body-color/25 text-body-color mb-11 border-b pb-11 text-base leading-relaxed dark:border-white/25">
        Ingresa tu nombre y correo para mantenerte informado sobre las novedades
        y actualizaciones. Sin spam, te lo prometemos.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary mb-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu correo"
          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary mb-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
        />
        <input
          type="submit"
          value="Suscribirse"
          className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300"
        />
        <p className="text-body-color dark:text-body-color-dark text-center text-base leading-relaxed">
          Sin spam garantizado. Respetamos tu privacidad.
        </p>
      </div>

      {/* Decoraciones SVG */}
      <div>
        <span className="absolute top-7 left-2">
          <DecoracionSVG color={colorStop} />
        </span>

        <span className="absolute bottom-24 left-1.5">
          <DecoracionSVGPequeno color={colorStop} />
        </span>

        <span className="absolute top-[140px] right-2">
          <CirculoDecorativo color={colorStop} />
        </span>

        <span className="absolute top-0 right-0">
          <LineasDecorativas color={colorStop} />
        </span>
      </div>
    </div>
  );
};

export default CajaSuscripcion;

// =========================================
// 🎨 Componentes SVG decorativos
// =========================================

const DecoracionSVG = ({ color }: { color: string }) => (
  <svg
    width="57"
    height="65"
    viewBox="0 0 57 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
      fill={`url(#gradient1)`}
    />
    <defs>
      <linearGradient
        id="gradient1"
        x1="-18.3187"
        y1="55.1044"
        x2="37.161"
        y2="15.3509"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={color} stopOpacity="0.62" />
        <stop offset="1" stopColor={color} stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const DecoracionSVGPequeno = ({ color }: { color: string }) => (
  <svg
    width="39"
    height="32"
    viewBox="0 0 39 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
      fill={`url(#gradient2)`}
    />
    <defs>
      <linearGradient
        id="gradient2"
        x1="39.1948"
        y1="38.335"
        x2="10.6982"
        y2="10.2511"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={color} stopOpacity="0.62" />
        <stop offset="1" stopColor={color} stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const CirculoDecorativo = ({ color }: { color: string }) => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
      fill={`url(#gradient3)`}
    />
    <defs>
      <linearGradient
        id="gradient3"
        x1="-0.571054"
        y1="-37.1717"
        x2="28.7937"
        y2="26.7564"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={color} stopOpacity="0.62" />
        <stop offset="1" stopColor={color} stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const LineasDecorativas = ({ color }: { color: string }) => (
  <svg
    width="162"
    height="91"
    viewBox="0 0 162 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.3">
      {["paint0", "paint1", "paint2", "paint3"].map((id, i) => (
        <path
          key={i}
          opacity="0.45"
          d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
          stroke={`url(#${id})`}
        />
      ))}
    </g>
    <defs>
      {["paint0", "paint1", "paint2", "paint3"].map((id, i) => (
        <linearGradient
          key={i}
          id={id}
          x1={i % 2 === 0 ? "291.35" : "333.35"}
          y1={i % 2 === 0 ? "12.1032" : "-12.8968"}
          x2={i % 2 === 0 ? "179.211" : "221.211"}
          y2="237.617"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.328125" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      ))}
    </defs>
  </svg>
);
