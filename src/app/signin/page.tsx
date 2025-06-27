import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "This is Sign In Page ",
};

const SigninPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="dark:bg-dark mx-auto max-w-[500px] rounded-md bg-white px-6 py-10 shadow-lg sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                Inicia sesión en tu cuenta
              </h3>
              <p className="text-body mb-11 text-center text-base font-medium">
                Accede a tu cuenta para una experiencia más rápida.
              </p>

              <form>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-dark mb-2 block text-sm dark:text-white"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ingresa tu correo"
                    className="border-stroke text-body focus:border-primary w-full rounded border bg-[#f8f8f8] px-5 py-3 text-base outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="text-dark mb-2 block text-sm dark:text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    className="border-stroke text-body focus:border-primary w-full rounded border bg-[#f8f8f8] px-5 py-3 text-base outline-none"
                  />
                </div>

                <div className="mb-6 flex flex-col justify-between sm:flex-row sm:items-center">
                  <label className="text-body flex items-center text-sm">
                    <input type="checkbox" className="mr-2" />
                    Mantener sesión iniciada
                  </label>
                  <div>
                    <a
                      href="#"
                      className="text-primary text-sm hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>

                <div className="mb-6">
                  <button className="bg-primary hover:bg-primary/90 w-full rounded px-6 py-3 text-base font-medium text-white transition">
                    Iniciar sesión
                  </button>
                </div>
              </form>

              <p className="text-body text-center text-base">
                ¿No tienes una cuenta?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
