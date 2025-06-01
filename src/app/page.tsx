'use client';

import { useState } from 'react';
import Script from 'next/script';
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { UserCircle, MessageCircle, Calendar, FileText, Menu } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

// Función para desplazamiento suave a una sección
const scrollToSection = (id: string) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>CareConnect</title>
        <link rel="icon" href="/careconnect_logo.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/careconnect_logo.png" alt="Logo de CareConnect" width={50} height={50} />
            <span className="ml-2 text-2xl font-bold text-purple-700">CareConnect</span>
          </div>
          
          {/* Botón menú hamburguesa solo en pantallas pequeñas */}
          <button className="text-purple-700 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-8 w-8" />
          </button>

          {/* Menú en pantallas grandes */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('#features')} className="text-purple-700 hover:text-purple-500 transition-all duration-300">
              Características
            </button>
            <button onClick={() => scrollToSection('#experiment')} className="text-purple-700 hover:text-purple-500 transition-all duration-300">
              Unirse al Experimento
            </button>
            <button onClick={() => scrollToSection('#faq')} className="text-purple-700 hover:text-purple-500 transition-all duration-300">
              Preguntas Frecuentes
            </button>
          </nav>

          {/* Menú desplegable en pantallas pequeñas */}
          <div className={`w-full md:hidden fixed top-0 left-0 bg-white z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <nav className="flex flex-col space-y-4 p-6">
              <button className="self-end text-purple-700 text-3xl" onClick={() => setIsMenuOpen(false)}>×</button>
              <button onClick={() => { setIsMenuOpen(false); scrollToSection('#features'); }} className="text-purple-700 hover:text-purple-500 text-lg">
                Características
              </button>
              <button onClick={() => { setIsMenuOpen(false); scrollToSection('#experiment'); }} className="text-purple-700 hover:text-purple-500 text-lg">
                Unirse al Experimento
              </button>
              <button onClick={() => { setIsMenuOpen(false); scrollToSection('#faq'); }} className="text-purple-700 hover:text-purple-500 text-lg">
                Preguntas Frecuentes
              </button>
            </nav>
          </div>

        </header>

        <main>
          {/* Hero Section */}
          <section 
            className="relative bg-cover bg-center text-white text-center py-20 md:py-32" 
            style={{ backgroundImage: "url('/elder.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-30 z-10"></div> {/* Sombra de fondo */}
            <div className="relative z-20">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Revolucionando el Cuidado en el Hogar
              </h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
                Conectá a tus seres queridos con profesionales de la salud certificados, sin salir de casa. Coordinamos todo de forma rápida, humana y sin complicaciones.
              </p>
              <Button
                asChild
                className="bg-white text-purple-600 hover:bg-purple-200 font-bold py-2 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                <a
                  href="https://wa.me/50687711311"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ¡Solicitá tu servicio ahora por WhatsApp!
                </a>
              </Button>
            </div>
          </section>

          {/* Propuesta de Valor */}
          <section className="bg-white py-10 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8 text-center">
                Nuestra Propuesta de Valor
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-4 mr-4">
                    <UserCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-purple-700">Conexión directa con profesionales confiables</h3>
                    <p className="text-purple-600"> Encontrá al profesional de la salud que necesitás en tu zona. Solo escribinos por WhatsApp y nosotros nos encargamos del resto.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-4 mr-4">
                    <MessageCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-purple-700">Seguimiento y registro de cada servicio</h3>
                    <p className="text-purple-600"> Llevamos un control detallado de cada atención brindada para garantizar continuidad, calidad y confianza en los cuidados.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-4 mr-4">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-purple-700"> Servicios especializados adaptados a vos</h3>
                    <p className="text-purple-600">Nos aseguramos de entender tu situación para asignarte el profesional más adecuado y darte seguimiento cercano.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-4 mr-4">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-purple-700"> Gestión humana, simple y rápida</h3>
                    <p className="text-purple-600"> Olvídate de complicaciones. Coordinamos todo por WhatsApp: desde la solicitud inicial hasta la asignación del profesional y el seguimiento posterior.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Características */}
          <section id="features" className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-purple-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">
                Beneficios que vas a obtener
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    title: 'Conexión directa con profesionales verificados',
                    description:
                      'Conectamos a pacientes con enfermeros y cuidadores certificados, según sus necesidades.',
                    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg',
                  },
                  {
                    title: 'Sin complicaciones',
                    description:
                      'Gestionamos todo el servicio por vos: desde el primer contacto hasta el seguimiento, todo por WhatsApp.',
                    image: 'https://images.pexels.com/photos/5234506/pexels-photo-5234506.jpeg',
                  },
                  {
                    title: 'Atención personalizada',
                    description:
                      'Entendemos tu situación y te asignamos el profesional adecuado para una atención eficiente y humana.',
                    image: 'https://images.pexels.com/photos/7120126/pexels-photo-7120126.jpeg',
                  },
                  {
                    title: 'Seguimiento constante',
                    description:
                      'Nuestro equipo te acompaña durante todo el proceso para asegurarnos de que recibas el mejor servicio posible.',
                    image: 'https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg md:text-xl text-purple-700 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-purple-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Call to Action (Únete al Experimento) */}
          <section id="experiment" className="py-20 md:py-24 bg-purple-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Querés que te contactemos?</h2>
              <p className="mb-8 text-lg md:text-xl">
                Dejanos tus datos y te escribimos sin compromiso:
              </p>
              {/* Embedding Typeform */}
              <div 
                data-tf-live="01JGTBYWBEDYJ3Z6TPVT5GKWH1"
                className="w-full md:w-3/4 lg:w-1/2 h-[600px] md:h-[500px] rounded-lg shadow-lg overflow-hidden mx-auto"
              ></div>
              <p className="mt-4 text-sm">
                Nos estaremos poniendo en contacto lo más pronto posible.
              </p>
            </div>
            {/* Script de Typeform */}
            <Script
              src="https://embed.typeform.com/next/embed.js"
              strategy="afterInteractive"
            />
          </section>

          {/* Sección CTA emocional diferenciada visualmente */}
          <section className="py-20 bg-gray-100 text-purple-800">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Comenzá a recibir atención médica de calidad sin complicaciones.
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Unite a <span className="font-semibold">CareConnect</span> y cuidá de tus seres queridos con la ayuda de profesionales confiables y humanos.
              </p>
              <a
                href="https://wa.me/50687711311" // Cambiá por tu número real
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-purple-700 transition-colors duration-300"
              >
                ¡Solicitá más información ahora!
              </a>
              <p className="mt-6 text-sm text-purple-600">
                Sin formularios largos. Solo escribinos y nosotros nos encargamos del resto.
              </p>
            </div>
          </section>


          {/* Preguntas Frecuentes */}
          <section id="faq" className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">
                Preguntas Frecuentes
              </h2>
              <Accordion type="single" collapsible className="max-w-2xl mx-auto text-gray-800">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold">¿Qué es CareConnect y cómo funciona?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p>
                      CareConnect es una plataforma que conecta a pacientes con profesionales de la salud para atención domiciliaria de forma rápida y segura.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-semibold">¿Cómo solicito un servicio?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>
                      Solo tenés que escribirnos por WhatsApp. Nos encargamos de coordinar todo por vos.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger className="font-semibold">¿Qué servicios ofrece CareConnect?</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>
                    Ofrecemos atención médica y cuidados a domicilio, seguimiento del servicio y coordinación de citas según tus necesidades.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-semibold">¿Cómo puedo confiar en los profesionales?</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>
                    Todos los profesionales han sido verificados, cuentan con experiencia y referencias. Te conectamos solo con personal capacitado y de confianza.
                  </p>
                </AccordionContent>
              </AccordionItem>
              </Accordion>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-purple-800 text-white py-10 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

            {/* Logo + Slogan */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
              <Image src="/careconnect_logo.png" alt="Logo de CareConnect" width={60} height={60} />
              <p className="mt-2 text-lg font-semibold">CareConnect</p>
              <p className="mt-1 text-sm text-purple-300">Conectando el cuidado, un hogar a la vez.</p>
            </div>

            {/* Contacto y redes */}
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>

              <div className="flex justify-center gap-6 mb-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/careconnect.cr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors"
                  title="Instagram"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.4.4.6.2 1 .5 1.4 1 .4.4.8.8 1 1.4.2.4.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.4-.2.6-.5 1-1 1.4-.4.4-.8.8-1.4 1-.4.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.4-.4-.6-.2-1-.5-1.4-1-.4-.4-.8-.8-1-1.4-.2-.4-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.4.2-.6.5-1 1-1.4.4-.4.8-.8 1.4-1 .4-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.6 0 4.5.1 3.6.4 2.6.7 1.8 1.2 1 2S.7 3.4.4 4.4C.1 5.5 0 6.6 0 8v8c0 1.4.1 2.5.4 3.6.3 1 .8 1.8 1.6 2.6s1.6 1.3 2.6 1.6C5.5 23.9 6.6 24 8 24h8c1.4 0 2.5-.1 3.6-.4 1-.3 1.8-.8 2.6-1.6s1.3-1.6 1.6-2.6c.3-1.1.4-2.2.4-3.6V8c0-1.4-.1-2.5-.4-3.6-.3-1-.8-1.8-1.6-2.6S21.1.7 20.1.4C19 .1 17.9 0 16.5 0H12zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.6c-.8 0-1.4.6-1.4 1.4S17.6 7.2 18.4 7.2 19.8 6.6 19.8 5.8 19.2 4.4 18.4 4.4z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61565918283402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors"
                  title="Facebook"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.492v-9.294H9.691v-3.622h3.126V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/50687711311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors"
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15s-.767.967-.94 1.166c-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.203-.242-.58-.487-.501-.669-.51l-.57-.01c-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.615h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.86 9.86 0 017.004 2.906 9.865 9.865 0 012.881 7.003c-.003 5.45-4.437 9.884-9.889 9.884M20.66 3.343A11.815 11.815 0 0012.051 0C5.495 0 .164 5.332.16 11.888c0 2.096.547 4.14 1.588 5.945L0 24l6.306-1.654a11.857 11.857 0 005.723 1.459h.005c6.555 0 11.887-5.332 11.891-11.888a11.84 11.84 0 00-3.265-8.574" />
                  </svg>
                </a>
              </div>

              <p className="text-sm">WhatsApp: <a href="https://wa.me/50687711311" className="underline hover:text-purple-300">+506 8771 1311</a></p>
            </div>

            {/* Legal */}
            <div className="w-full md:w-1/3 text-center md:text-right text-sm flex flex-col justify-between">
              <p>&copy; {new Date().getFullYear()} CareConnect</p>
              <p>Todos los derechos reservados.</p>
              <p className="text-purple-300 mt-4 md:mt-0">Gracias por confiar en nosotros para cuidar lo que más importa.</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
