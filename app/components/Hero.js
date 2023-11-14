/* eslint-disable @next/next/no-img-element */
import AutoWritingText from './Autotyping'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'About', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Roadmap', href: '#' },
    { name: 'Tokenomics', href: '#' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="isolate bg-[#00081A]">
            
            <main>
                <div className="relative px-6 -mt-1 lg:px-8">
                    <div className="mx-auto max-w-6xl pt-10 pb-32 sm:pt-24 sm:pb-40">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-[#2196F3] hover:ring-gray-900/20">
                                    <span className="text-white">
                                        V3 is live.
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight text-[#2196F3] sm:text-center md:text-8xl">
                                Limitless Network Finance
                                </h1>
                                
                                <p className="mt-6 text-2xl leading-12 text-white sm:text-center">
                                The Gold Standard of Crypto
Enables easy, inclusive, and cost-effective DEX trading across different chains.
                                </p>
                                <div className="mt-8 flex gap-x-4 sm:justify-center">
                                    <a
                                        href="#"
                                        className="inline-block rounded-lg bg-[] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#2169F3] hover:bg-[#2196F3] hover:ring-[#2169F3]"
                                    >
                                        Launch Dapp
                                        
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-block rounded-lg px-4 py-1.5 text-white text-base font-semibold leading-7 bg-[#2169F3] ring-1 ring-[#2169F3]/10 hover:ring-[#2169F3]/20"
                                    >
                                        Read Whitepaper
                                        
                                    </a>
                                </div>
                            </div>
                            <div className="absolute animate-pulse inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                                <svg
                                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                    viewBox="0 0 1155 678"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                        fillOpacity=".3"
                                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                            x1="1155.49"
                                            x2="-78.208"
                                            y1=".177"
                                            y2="474.645"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2196F3" />
                                            <stop offset={1} stopColor="#FFFFFF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
