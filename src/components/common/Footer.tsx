import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import FooterForm from "@/components/common/FooterForm";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20">
      <div className="max-w-360 mx-auto px-8">
        {/* ================= TOP BAR ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12 pb-10">
          {/* Logo + Title */}
          <div className="flex items-center gap-6">
            <Image
              src="/images/logo.webp"
              alt="Vision Plus Healthcare"
              width={120}
              height={64}
            />
            <h3 className="text-[32px] tracking-wide font-normal">
              Vision Plus Healthcare
            </h3>
          </div>

          {/* Right Content */}
          <div className="text-left md:text-right">
            <h4 className="text-[26px] tracking-wide">
              Contact us for more information
            </h4>
            <p className="text-[16px] mt-1">
              Sign up with your email address to receive news and updates.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mb-14" />

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_2fr] gap-10 pb-16">
          {/* ===== COLUMN 1 : ADDRESS ===== */}
          <div className="space-y-8">
            {/* Head Office */}
            <div className="mb-14">
              <h4 className="text-[20px] mb-4">Head Office</h4>

              <p className="flex gap-3 text-[16px] leading-7">
                <MapPin size={20} className="mt-1" />
                Tayal Siddhivinayak Avenue
                <br /> Plot No. 01, Gut No. 43, Near Link Road, <br />
                Golwadi – 431010 Taluka/District: Chh. Sambhajinagar
              </p>

              <p className="flex gap-3 mt-3 text-[16px]">
                <Phone size={18} />
                +91 88888 45183 / 0240 – 2990217
              </p>

              <p className="flex gap-3 mt-3 text-[16px]">
                <Mail size={18} />
                info@visionplushealthcare.com
              </p>
            </div>

            {/* Corporate Office */}
            <div className="border-t border-white/20 pt-10">
              <h4 className="text-[20px] mb-4">Corporate Office</h4>

              <p className="flex gap-3 text-[16px] leading-7">
                <MapPin size={20} className="mt-1" />
                U.G -3 A, Plot No 1 to 9, Udyog Indrakamal, Near <br />
                M.I.T. College , Beed by pass road, Aurangabad –<br /> 431005,
                India
              </p>

              <p className="flex gap-3 mt-3 text-[16px]">
                <Phone size={18} />
                +91 88888 45183 / 0240 – 2990217
              </p>

              <p className="flex gap-3 mt-3 text-[16px]">
                <Mail size={18} />
                info@visionplushealthcare.com
              </p>
            </div>
          </div>

          {/* ===== COLUMN 2 : MENU ===== */}
          <ul className="space-y-4 text-[16px] pt-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/life-at-vision-plus">Life at Vision Plus</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
          </ul>

          {/* ===== COLUMN 3 : MENU ===== */}
          <ul className="space-y-4 text-[16px] pt-10">
            <li>
              <Link href="/manufacturing">Manufacturing</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/terms">Term & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>

          {/* ===== COLUMN 4 : FORM ===== */}
          <FooterForm />
        </div>

        <div className="border-t border-white/20" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 text-[16px] text-white">
          <p>
            © Copyright 2025 | www.visionplushealthcare.com | All rights
            reserved.
          </p>

          <div className="flex gap-3 mt-4 md:mt-0">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-black hover:bg-red-600 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-black hover:bg-red-600 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter size={14} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-black hover:bg-red-600 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-black hover:bg-red-600 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
