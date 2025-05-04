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
                Conéctate con Profesionales de la Salud y cuida a tus seres queridos en la comodidad de tu hogar.
              </p>
              <Button 
                onClick={() => window.location.href = "#experiment"} 
                className="bg-white text-purple-600 hover:bg-purple-200 font-bold py-2 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                ¡Sé parte de algo nuevo!
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
                Características Principales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    title: 'Conexión directa por WhatsApp',
                    description:
                      'Conecta fácilmente con profesionales del cuidado mediante WhatsApp. Sin apps, sin complicaciones.',
                    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg',
                  },
                  {
                    title: 'Revisión previa del perfil profesional',
                    description:
                      'Antes de confirmar el servicio, recibes el perfil del profesional con experiencia, especialidades y referencias verificadas.',
                    image: 'https://images.pexels.com/photos/5234506/pexels-photo-5234506.jpeg',
                  },
                  {
                    title: 'Atención personalizada según tus necesidades',
                    description:
                      'Nos aseguramos de entender tu situación para asignarte el profesional más adecuado y darte seguimiento cercano.',
                    image: 'https://images.pexels.com/photos/7120126/pexels-photo-7120126.jpeg',
                  },
                  {
                    title: 'Seguimiento humano y confiable',
                    description:
                      'Nuestro equipo te acompaña antes, durante y después del servicio para garantizar seguridad, calidad y satisfacción.',
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Curioso por saber más?</h2>
              <p className="mb-8 text-lg md:text-xl">
                Ayúdanos a probar esta nueva plataforma y sé el primero en acceder a servicios revolucionarios.
              </p>
              {/* Embedding Typeform */}
              <div 
                data-tf-live="01JGTBYWBEDYJ3Z6TPVT5GKWH1"
                className="w-full md:w-3/4 lg:w-1/2 h-[600px] md:h-[500px] rounded-lg shadow-lg overflow-hidden mx-auto"
              ></div>
              <p className="mt-4 text-sm">
                Al registrarte, quedarás en una lista de espera para obtener más información.
              </p>
            </div>
            {/* Script de Typeform */}
            <Script
              src="https://embed.typeform.com/next/embed.js"
              strategy="afterInteractive"
            />
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
                      CareConnect es un servicio de conexión humana que enlaza pacientes con profesionales de salud de forma directa, rápida y segura. En lugar de utilizar una plataforma digital, la interacción sucede a través de WhatsApp, donde nuestro equipo se encarga de gestionar todo el proceso: desde la solicitud del paciente hasta la asignación del profesional adecuado.
                    </p>
                    <p>
                      Nos aseguramos de facilitar el acceso a atención personalizada y confiable, manteniendo un registro interno de cada servicio brindado para garantizar continuidad en los cuidados y una experiencia cercana, sin complicaciones tecnológicas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-semibold">¿Quién puede usar CareConnect?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>
                      CareConnect está pensado para cualquier persona que necesite apoyo en el cuidado de la salud o desee brindar sus servicios profesionales. Nuestro servicio conecta directamente a:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Pacientes y familias que buscan atención confiable, humana y accesible.
                      </li>
                      <li>
                        Cuidadores gerontológicos, asistentes de pacientes, enfermeros y otros profesionales de la salud interesados en ofrecer sus servicios por contrato.
                      </li>
                    </ul>
                    <p>
                      A través de WhatsApp, nuestro equipo gestiona las conexiones y asegura que cada solicitud se atienda de forma personalizada, sin necesidad de que los usuarios interactúen con una plataforma compleja.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger className="font-semibold">¿Qué servicios ofrece CareConnect?</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Gestión de citas personalizada:</strong> Coordinamos por ti la disponibilidad del profesional ideal y agendamos la consulta según tus horarios.
                    </li>
                    <li>
                      <strong>Seguimiento del cuidado:</strong> Llevamos un registro interno de cada servicio prestado, facilitando la continuidad del tratamiento y la comunicación entre profesional y paciente.
                    </li>
                    <li>
                      <strong>Conexiones a la medida:</strong> Analizamos tu necesidad y te conectamos con el profesional más adecuado para tu situación, ya sea un enfermero, asistente o cuidador especializado.
                    </li>
                    <li>
                      <strong>Bitácoras y reportes del servicio:</strong> El profesional registra sus observaciones y cuidados en cada visita, y nuestro equipo te comparte los reportes relevantes para mantenerte al tanto.
                    </li>
                    <li>
                      <strong>Soporte humano constante:</strong> Siempre estarás acompañado. Ante cualquier duda, urgencia o necesidad de ajuste, podés escribirnos directamente y nosotros lo gestionamos.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              </Accordion>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-purple-900 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center text-center md:text-left">
              
              {/* Logo y Eslogan */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Image 
                    src="/careconnect_logo.png" 
                    alt="Logo de CareConnect" 
                    width={60} 
                    height={60} 
                  />
                  <div>
                    <p className="text-lg font-semibold">CareConnect</p>
                    <p className="text-sm text-purple-300">Conectando el cuidado, un hogar a la vez.</p>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
                  <a 
                    href="https://www.instagram.com/careconnect.cr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* Derechos Reservados */}
              <div className="w-full md:w-1/3 text-sm text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} CareConnect</p>
                <p>Todos los derechos reservados.</p>
              </div>
            </div>

            {/* Línea Divisoria */}
            <div className="border-t border-purple-700 my-6"></div>

            {/* Nota Final */}
            <div className="text-center text-sm text-purple-300">
              Gracias por confiar en nosotros para cuidar lo que más importa.
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
