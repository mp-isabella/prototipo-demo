import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tendencias Web 2025 | Innovación y Futuro Digital",
  description: "Explora las principales tendencias en desarrollo web para 2025 que están transformando el mundo digital.",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  Las 5 principales tendencias en desarrollo web para 2025
                </h2>
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      
                      <div>
                        <span className="text-body-color text-base font-medium">
                          De <span>María Riquelme</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color text-base font-medium mr-5">
                        26 Jun 2025
                      </p>
                      <p className="text-body-color text-base font-medium">
                        45 Views
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                    >
                      Tecnología
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium">
                    El mundo digital evoluciona a un ritmo vertiginoso. Las
                    empresas, marcas y profesionales deben adaptarse rápidamente
                    para mantenerse competitivos. Aquí te presentamos las
                    tendencias que marcarán el desarrollo web en 2025.
                  </p>

                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-[97/60] w-full">
                      <Image
                        src="/images/blog/blog-details.jpg"
                        alt="Tendencias web"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                    1. IA integrada en la experiencia web
                  </h3>
                  <p className="text-body-color mb-6">
                    La inteligencia artificial se convierte en una herramienta
                    clave para personalizar la experiencia del usuario, desde
                    chatbots inteligentes hasta recomendaciones personalizadas y
                    asistentes virtuales.
                  </p>

                  <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                    2. Aplicaciones Web mejoradas
                  </h3>
                  <p className="text-body-color mb-6">
                    Las PWAs serán más rápidas, confiables y capaces de ofrecer
                    experiencias similares a apps nativas, reduciendo costos de
                    desarrollo y mejorando la accesibilidad.
                  </p>

                  <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                    3. Web y descentralización
                  </h3>
                  <p className="text-body-color mb-6">
                    El auge de la Web3 traerá mayor seguridad, transparencia y
                    control de datos mediante blockchain y tecnologías
                    descentralizadas.
                  </p>

                  <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                    4. Diseño accesible y sostenible
                  </h3>
                  <p className="text-body-color mb-6">
                    El foco estará en sitios inclusivos, accesibles para todos,
                    y optimizados para consumir menos energía, alineándose con
                    prácticas sostenibles.
                  </p>

                  <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                    5. Experiencias inmersivas
                  </h3>
                  <p className="text-body-color mb-10">
                    La AR permitirá a los usuarios interactuar con productos,
                    espacios o servicios desde sus navegadores, creando
                    experiencias memorables y diferenciales.
                  </p>

                  <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8">
                    <p className="text-body-color text-center text-base font-medium italic">
                      "El futuro del desarrollo web no es opcional, es la clave
                      para que tu negocio crezca y se mantenga competitivo en la
                      nueva era digital."
                    </p>
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        Etiquetas populares:
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Web" />
                        <TagButton text="Tecnología" />
                        <TagButton text="Innovación" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                        Comparte este artículo:
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
