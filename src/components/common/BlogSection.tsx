import Image from "next/image";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  return (
    <section className="py-24">
      <div className="max-w-360 mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-[40px] font-semibold">Everyday Health Blog</h2>

          <button className="bg-[#E31E25] text-white px-6 py-3 rounded-lg text-[16px] hover:bg-red-700 transition">
            View All
          </button>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div key={index} className="group">
              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden mb-5">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={457}
                  height={400}
                  className="w-full h-65 object-cover transition group-hover:scale-105"
                />

                {/* DATE TAG */}
                <span className="absolute bottom-4 left-4 bg-white text-black text-[20px] px-4 py-1 rounded-full shadow">
                  {blog.date} – {blog.readTime}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-[22px] font-medium leading-relaxed hover:text-red-600 transition">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
