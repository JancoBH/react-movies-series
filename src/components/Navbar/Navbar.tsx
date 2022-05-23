import { Disclosure } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import useScroll from '../../hooks/useScroll';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Movies', href: '/movies', current: false },
    { name: 'TV Series', href: '/tv-series', current: false },
  ];

  const isScrolled = useScroll(30);

  return (
    <nav className={`${isScrolled && 'bg-black'} fixed w-full z-10`}>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto px-5 xl:px-0">
              <div className="flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-between sm:justify-start ">
                  <a className="flex-shrink-0 flex items-center">
                    <div className="flex text-2xl text-left pl-2 pr-2 text-white">Movies & Series</div>
                  </a>

                  {/* Desktop menu items */}
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex">
                      {navigation.map((item) => (
                        <NavLink
                          className={classNames(
                            item.current
                              ? 'text-red-600 dark:text-red-500'
                              : 'text-gray-200 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-500',
                            'px-3 py-2 text-sm font-medium ml-3',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          key={item.name}
                          to={item.href}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-full focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
                        </svg>
                      ) : (
                        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        </svg>
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              {/* Mobile menu items */}
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-red-500 dark:text-red-500' : 'text-gray-200 hover:text-red-500 dark:hover:text-red-500',
                      'block px-3 py-2 font-medium',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  );
};
