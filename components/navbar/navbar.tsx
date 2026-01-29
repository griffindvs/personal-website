import { Fragment, useState } from 'react';
import {
  Menu,
  MenuItem,
  MenuItems,
  MenuButton,
  Transition,
} from '@headlessui/react';

import styles from './navbar.module.scss';

function classNames(...classes: string[]) {
  return classes.join(' ');
}

interface NavbarItemProps {
  text: string;
  link: string;
}

function NavbarItem({ text, link }: NavbarItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const anchorStyles = 'relative hover:no-underline';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="sr-only">Open {text}</span>
      <a
        href={link || '#'}
        className={classNames(styles.navitem, anchorStyles)}
      >
        /{text} {isHovered && '→'}
      </a>
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-left">
            <div className="">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className={classNames(
                    styles.navitem,
                    'px-0 py-2 rounded-md text-sm'
                  )}
                  aria-current={'page'}
                >
                  [ griffin ] &gt;
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 cursor-pointer">
            <NavbarItem text="notes" link="/notes" />
            <Menu as="div" className="relative ml-3">
              <MenuButton className="flex px-2">
                <NavbarItem text="tools" link="" />
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        href="/mobility"
                        className={classNames(
                          focus ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Mobility ML
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        href="https://pace.griffindvs.com"
                        className={classNames(
                          focus ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Pace Calculator
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        href="https://utdal.github.io/sg-budget-breakdown/"
                        className={classNames(
                          focus ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        UTD Budget Breakdown
                      </a>
                    )}
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
