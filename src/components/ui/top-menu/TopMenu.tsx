import React from 'react';
import { titleFont } from '@/configs/fonts';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri';
import { TiShoppingCart } from 'react-icons/ti';

export const TopMenu = () => {
    return (
        <nav className="flex justify-between items-center w-full px-5">
            <div>
                <Link href="#">
                    <a className={`${titleFont.className} antialiased font-bold`}>
                        Zapatos 
                    </a>
                    <span>| don juancho</span>
                </Link>
            </div>
            {/* Menú central */}
            <div className="hidden sm:flex space-x-2">
                <a
                    href="https://wa.me/?text=hola%20%F0%9F%91%8B%20me%20interesan%20los%20zapatos"
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 flex items-center"
                    aria-label="Comprar">
                    <TiShoppingCart className="w-5 h-5 mr-2" />
                    Comprar
                </a>
                <Link href="/contact">
                    <a className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 flex items-center" aria-label="Contacto">
                        <FaWhatsapp className="w-5 h-5 mr-2" />
                        Contacto
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 flex items-center" aria-label="Quiero una página">
                        <RiPagesLine className="w-5 h-5 mr-2" />
                        Quiero una página
                    </a>
                </Link>
            </div>
        </nav>
    );
};

