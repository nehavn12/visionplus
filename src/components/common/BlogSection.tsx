import Image from "next/image";
import Button from "./GlobalButton";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  return (
    <section className="pb-32 pt-14 w-full">
      <div className="wrapper mx-auto w-full ">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-[40px] font-semibold">Everyday Health Blog</h2>
          <Button type="link" text="View All" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="group">
              <div className="relative h-[25rem] w-[28.604rem] rounded-[0.625rem] overflow-hidden mb-5">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  unoptimized
                  className=" object-cover transition group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-white text-textSecondary text-xl px-4 py-1 leading-[1.2000] align-middle tracking-[2%] rounded-md">
                  {blog.date} – {blog.readTime}
                </span>
              </div>
              <h3 className="text-[1.375rem] font-semibold tracking-[2%] leading-[1.6364] hover:text-secondary transition">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
