// App.jsx
import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 0.1) % 101);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const levitationOffset = 10;
  const levitationAmount = Math.sin((position / 50) * Math.PI) * levitationOffset;
  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 transition-opacity duration-500 ease-in-out"
          aria-hidden="true"
          style={{
            transform: `translateY(${levitationAmount}px)`,
            opacity: position === 0 ? 0 : 1,  // Hacer que aparezca suavemente al reiniciar
          }}
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8090ff] to-[#0069ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animated-fadeIn"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              transform: `translateX(${position}%)`,
              animation: 'fadeIn 1s',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-100">
              Bienvenido a mi sitio web, Si te interesa mi trabajo: {' '}
              <a href="#" className="font-semibold text-cyan-400">
                <span className="absolute inset-0" aria-hidden="true" />
                Contáctame <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          <span className="bg-gradient-to-br from-cyan-200 to-cyan-500 text-transparent bg-clip-text">Analista </span>
            Programador  Desarrollador   <span className="bg-gradient-to-br from-sky-500 to-sky-500 text-transparent bg-clip-text"> Front End</span>
          </h1>
            <p className="mt-6 text-lg leading-8 text-white">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a className=" cursor-pointer text-white border border-sky-700 bg-gradient-to-br from-sky-700/10 hover:from-sky-500/40 transition to-black-500/20 hover:to-black-500/50 px-8 py-4 rounded-md">
              Ver Proyectos</a>
            
              <a href="/" class="border border-zinc-400 bg-zinc-200 hover:bg-zinc-800/80 hover:text-white transition bg-zinc-900/50 text-zinc-300 px-8 py-4 rounded-md">Abrir CV </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative right-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8090ff] to-[#0069ff] opacity-30 sm:right-[calc(0%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                 transform: `translateX(${position}%)`,
                 
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
