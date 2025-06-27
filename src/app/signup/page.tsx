import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Red Netflix Style",
  description: "Sign up page with Netflix style colors",
};

const SignupPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="dark:bg-dark mx-auto max-w-[500px] rounded-md bg-white px-6 py-10 shadow-lg sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                Registrate
              </h3>
              <p className="text-body mb-11 text-center text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <form>
                <div className="mb-6">
                  <label className="text-dark mb-2 block text-sm dark:text-white">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    className="border-stroke text-body focus:border-primary w-full rounded border bg-[#f8f8f8] px-5 py-3 text-base outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-dark mb-2 block text-sm dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    className="border-stroke text-body focus:border-primary w-full rounded border bg-[#f8f8f8] px-5 py-3 text-base outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-dark mb-2 block text-sm dark:text-white">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="border-stroke text-body focus:border-primary w-full rounded border bg-[#f8f8f8] px-5 py-3 text-base outline-none"
                  />
                </div>

                <div className="mb-6 flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-body text-sm">
                    Estoy de acuerdo con los
                    <a href="#" className="text-primary hover:underline">
                      {" "}
                      Terminos{" "}
                    </a>
                    y
                    <a href="#" className="text-primary hover:underline">
                      {" "}
                      política de privacidad
                    </a>
                  </label>
                </div>

                <button className="bg-primary hover:bg-primary/90 w-full rounded px-6 py-3 text-base font-medium text-white transition">
                  Inscribirme
                </button>
              </form>

              <p className="text-body mt-6 text-center text-base">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/signin" className="text-primary hover:underline">
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 z-[-1]">
        {/* Background SVG or Decoration (opcional) */}
      </div>
    </section>
  );
};

export default SignupPage;
