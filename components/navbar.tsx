import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

import styles from '../styles/navbar.module.css';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const [projectsHover, setProjectsHover] = useState<boolean>(false);

    return (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-left">
                        <div className="">
                            <div className="flex space-x-4">
                                <a href="#"
                                    className={classNames(
                                        'text-white',
                                        'px-3 py-2 rounded-md text-sm'
                                    )}
                                    aria-current={'page'}
                                >
                                    [ griffin:~ ] &gt;
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <Menu as="div" className="relative ml-3">
                            {({ open }) => (
                                <>
                                    <div
                                        onMouseEnter={() => setProjectsHover(true)}
                                        onMouseLeave={() => setProjectsHover(false)}
                                    >
                                        <Menu.Button className="flex">
                                            <span className="sr-only">Open projects menu</span>
                                            {projectsHover ?
                                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block">
                                                    <span className="relative text-white">/projects</span>
                                                </span>
                                                :
                                                <span className="relative text-white">/projects</span>
                                            }
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="https://personal.utdallas.edu/~gcd/label"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Object Detection Dataset Builder
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="https://d2w9fdb6xkbqm8.cloudfront.net/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Analytic Hierarchy Process Tool
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="https://pace.griffindvs.com"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Pace Calculator
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    )
}
