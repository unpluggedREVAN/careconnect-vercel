'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { UserCircle, MessageCircle, Calendar, FileText, Menu } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviado:', { email, role });
    setEmail('');
    setRole('');
  };

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
            <a href="#features" className="text-purple-700 hover:text-purple-500 transition-all duration-300">Características</a>
            <a href="#experiment" className="text-purple-700 hover:text-purple-500 transition-all duration-300">Unirse al Experimento</a>
            <a href="#faq" className="text-purple-700 hover:text-purple-500 transition-all duration-300">Preguntas Frecuentes</a>
          </nav>

          {/* Menú desplegable en pantallas pequeñas */}
          <div className={`w-full md:hidden fixed top-0 left-0 bg-white z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <nav className="flex flex-col space-y-4 p-6">
              <button className="self-end text-purple-700 text-3xl" onClick={() => setIsMenuOpen(false)}>×</button>
              <a href="#features" className="text-purple-700 hover:text-purple-500 text-lg">Características</a>
              <a href="#experiment" className="text-purple-700 hover:text-purple-500 text-lg">Unirse al Experimento</a>
              <a href="#faq" className="text-purple-700 hover:text-purple-500 text-lg">Preguntas Frecuentes</a>
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
                    <h3 className="font-semibold text-xl text-purple-700">Conéctate con Profesionales Locales</h3>
                    <p className="text-purple-600">Encuentra profesionales de la salud en tu área de manera rápida y fácil.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-4 mr-4">
                    <MessageCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-purple-700">Servicios Especializados</h3>
                    <p className="text-purple-600">Desde cuidado geriátrico hasta terapias especializadas, adaptados a tus necesidades.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-4 mr-4">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-purple-700">Registros de Servicio</h3>
                    <p className="text-purple-600">Asegura la continuidad del cuidado con registros detallados de los servicios.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-4 mr-4">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-purple-700">Gestión Fácil</h3>
                    <p className="text-purple-600">Administra citas, perfiles y comunícate directamente con los enfermeros.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Características */}
          <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-purple-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">
                Características Principales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    title: 'Perfiles detallados de profesionales en el cuidado y la salud',
                    description:
                      'Accede a información completa sobre la experiencia, especialidades y calificaciones de los profesionales de la salud.',
                    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg',
                  },
                  {
                    title: 'Gestión de solicitudes de servicio',
                    description:
                      'Solicita y programa servicios de cuidado de salud de manera fácil y eficiente a través de nuestra plataforma intuitiva.',
                    image: 'https://images.pexels.com/photos/5234506/pexels-photo-5234506.jpeg',
                  },
                  {
                    title: 'Chat en tiempo real',
                    description:
                      'Comunícate instantáneamente con los profesionales de la salud para consultas rápidas o coordinación de cuidados.',
                    image: 'https://images.pexels.com/photos/7120126/pexels-photo-7120126.jpeg',
                  },
                  {
                    title: 'Seguimiento de registros de servicio',
                    description:
                      'Mantén un historial detallado de todos los servicios recibidos, asegurando una continuidad en el cuidado y facilitando futuras consultas.',
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
            <script src="https://embed.typeform.com/next/embed.js"></script>
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
                    CareConnect es una plataforma digital que conecta a médicos y pacientes de forma segura y eficiente. Permite a los médicos gestionar citas, bitácoras y expedientes médicos, mientras que los pacientes tienen acceso a un expediente privado e interconectado, facilitando el manejo de su información médica entre instituciones. A través de un sistema de emparejamiento inteligente, CareConnect asegura conexiones directas y efectivas en versiones web y móvil.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-semibold">¿Quién puede usar CareConnect?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    CareConnect está diseñado para ser utilizado por una amplia variedad de usuarios en el ámbito de la salud, incluyendo pacientes, cuidadores gerontológicos, asistentes de pacientes, asistentes de enfermeros y enfermeros. Cada usuario tiene acceso a herramientas adaptadas a sus necesidades específicas, permitiendo una gestión eficiente y colaborativa de la atención médica.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-semibold">¿Qué servicios ofrece CareConnect?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Gestión de citas:</strong> Permite a los pacientes agendar consultas y a los médicos administrar sus horarios.</li>
                      <li><strong>Expedientes médicos digitales:</strong> Facilita el almacenamiento, acceso y compartición de información médica de manera privada y segura.</li>
                      <li><strong>Bitácoras médicas:</strong> Herramientas para que los médicos registren y supervisen tratamientos y procedimientos.</li>
                      <li><strong>Conexiones personalizadas:</strong> Un sistema de emparejamiento que conecta a pacientes con el profesional de salud adecuado según sus necesidades.</li>
                      <li><strong>Seguimiento médico:</strong> Ayuda a los pacientes a llevar un control integral de su salud y tratamientos.</li>
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
