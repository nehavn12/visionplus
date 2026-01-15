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
    <footer className="bg-black text-white pt-8">
      <div className="wrapper mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_2fr] gap-10 pb-8">
          {/* ===== COLUMN 1 : ADDRESS ===== */}
          <div className="space-y-8 border border-white">
            {/* Head Office */}
            <div className="mb-4">
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
            <div className="border-t border-white/20 pt-4">
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
          <ul className="space-y-4 text-[16px] pt-10 border border-yellow-600">
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
          <ul className="space-y-4 text-[16px] pt-10 border border-red-500">
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
          <div className="border border-red-500">
            <FooterForm />
          </div>
        </div>

        <div className="border-t border-white/20" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between py-4 text-[16px] text-white">
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

// import { MapPin, Phone, Mail } from "lucide-react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// import Image from "next/image";
// import Link from "next/link";
// import FooterForm from "@/components/common/FooterForm";

// export default function Footer() {
//   const footerData = {
//     topBar: {
//       logo: {
//         src: "/images/logo.webp",
//         alt: "Vision Plus Healthcare",
//         // width: 120,
//         // height: 64,
//       },
//       title: "Vision Plus Healthcare",
//       rightTitle: "Contact us for more information",
//       rightDesc: "Sign up with your email address to receive news and updates.",
//     },

//     offices: [
//       {
//         title: "Head Office",
//         address: `Tayal Siddhivinayak Avenue
// Plot No. 01, Gut No. 43, Near Link Road,
// Golwadi – 431010 Taluka/District: Chh. Sambhajinagar`,
//         phone: "+91 88888 45183 / 0240 – 2990217",
//         email: "info@visionplushealthcare.com",
//       },
//       {
//         title: "Corporate Office",
//         address: `U.G -3 A, Plot No 1 to 9, Udyog Indrakamal, Near
// M.I.T. College , Beed by pass road, Aurangabad –
// 431005, India`,
//         phone: "+91 88888 45183 / 0240 – 2990217",
//         email: "info@visionplushealthcare.com",
//       },
//     ],

//     menus: [
//       [
//         { label: "Home", href: "/" },
//         { label: "About Us", href: "/about" },
//         { label: "Life at Vision Plus", href: "/life-at-vision-plus" },
//         { label: "Products", href: "/products" },
//         { label: "Testimonials", href: "/testimonials" },
//       ],
//       [
//         { label: "Manufacturing", href: "/manufacturing" },
//         { label: "Blogs", href: "/blogs" },
//         { label: "Contact Us", href: "/contact" },
//         { label: "Term & Conditions", href: "/terms" },
//         { label: "Privacy Policy", href: "/privacy-policy" },
//       ],
//     ],

//     bottomBar: {
//       copyright:
//         "© Copyright 2025 | www.visionplushealthcare.com | All rights reserved.",
//       socials: [
//         { label: "Facebook", href: "#" },
//         { label: "Twitter", href: "#" },
//         { label: "Instagram", href: "#" },
//         { label: "LinkedIn", href: "#" },
//       ],
//     },
//   };
//   const { topBar, offices, menus, bottomBar } = footerData;
//   return (
//     <footer className="bg-black text-white pt-20">
//       <div className="max-w-360 mx-auto px-8">
//         {/* ================= TOP BAR ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12 pb-10">
//           {/* Logo + Title */}
//           <div className="flex items-center gap-6">
//             <Image
//               src={topBar.logo.src}
//               alt={topBar.logo.alt}
//               width={120}
//               height={64}
//             />
//             <h3 className="text-[32px] tracking-wide font-normal">
//               {topBar.title}
//             </h3>
//           </div>

//           {/* Right Content */}
//           <div className="text-left md:text-right">
//             <h4 className="text-[26px] tracking-wide">{topBar.rightTitle}</h4>
//             <p className="text-[16px] mt-1">{topBar.rightDesc}</p>
//           </div>
//         </div>

//         <div className="border-t border-white/20 mb-14" />

//         {/* ================= MAIN FOOTER ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_2fr] gap-10 pb-16">
//           {/* ===== COLUMN 1 : ADDRESS ===== */}
//           <div className="space-y-8">
//             {/* Head Office */}
//             <div className="mb-14">
//               <h4 className="text-[20px] mb-4">{offices[0].title}</h4>

//               <p className="flex gap-3 text-[16px] leading-7">
//                 <MapPin size={20} className="mt-1" />
//                 {offices[0].address.split("\n").map((line, i) => (
//                   <span key={i}>
//                     {line}
//                     <br />
//                   </span>
//                 ))}
//               </p>

//               <p className="flex gap-3 mt-3 text-[16px]">
//                 <Phone size={18} />
//                 {offices[0].phone}
//               </p>

//               <p className="flex gap-3 mt-3 text-[16px]">
//                 <Mail size={18} />
//                 {offices[0].email}
//               </p>
//             </div>

//             {/* Corporate Office */}
//             <div className="border-t border-white/20 pt-10">
//               <h4 className="text-[20px] mb-4">{offices[1].title}</h4>

//               <p className="flex gap-3 text-[16px] leading-7">
//                 <MapPin size={20} className="mt-1" />
//                 {offices[1].address.split("\n").map((line, i) => (
//                   <span key={i}>
//                     {line}
//                     <br />
//                   </span>
//                 ))}
//               </p>

//               <p className="flex gap-3 mt-3 text-[16px]">
//                 <Phone size={18} />
//                 {offices[1].phone}
//               </p>

//               <p className="flex gap-3 mt-3 text-[16px]">
//                 <Mail size={18} />
//                 {offices[1].email}
//               </p>
//             </div>
//           </div>

//           {/* ===== COLUMN 2 : MENU ===== */}
//           <ul className="space-y-4 text-[16px] pt-10">
//             {menus[0].map((item, index) => (
//               <li key={index}>
//                 <Link href={item.href}>{item.label}</Link>
//               </li>
//             ))}
//           </ul>

//           {/* ===== COLUMN 3 : MENU ===== */}
//           <ul className="space-y-4 text-[16px] pt-10">
//             {menus[1].map((item, index) => (
//               <li key={index}>
//                 <Link href={item.href}>{item.label}</Link>
//               </li>
//             ))}
//           </ul>

//           {/* ===== COLUMN 4 : FORM ===== */}
//           <FooterForm />
//         </div>

//         <div className="border-t border-white/20" />

//         {/* ================= BOTTOM BAR ================= */}
//         <div className="flex flex-col md:flex-row items-center justify-between py-6 text-[16px] text-white">
//           <p>{bottomBar.copyright}</p>

//           <div className="flex gap-3 mt-4 md:mt-0">
//             <a
//               href={bottomBar.socials[0].href}
//               className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-black hover:bg-red-600 hover:text-white transition"
//               aria-label={bottomBar.socials[0].label}
//             >
//               <FaFacebookF size={14} />
//             </a>

//             <a
//               href={bottomBar.socials[1].href}
//               className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-black hover:bg-red-600 hover:text-white transition"
//               aria-label={bottomBar.socials[1].label}
//             >
//               <FaTwitter size={14} />
//             </a>

//             <a
//               href={bottomBar.socials[2].href}
//               className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-black hover:bg-red-600 hover:text-white transition"
//               aria-label={bottomBar.socials[2].label}
//             >
//               <FaInstagram size={14} />
//             </a>

//             <a
//               href={bottomBar.socials[3].href}
//               className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-black hover:bg-red-600 hover:text-white transition"
//               aria-label={bottomBar.socials[3].label}
//             >
//               <FaLinkedinIn size={14} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
