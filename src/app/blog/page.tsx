"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components";
import Contact from "../contact";

interface Post {
  id: string;
  title: string;
  content: string;
  published: string;
  url: string;
}

const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/blogger/v3/blogs/byurl?url=https://azizchniti.blogspot.com&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((blogData) =>
        fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${blogData.id}/posts?key=${API_KEY}`
        )
      )
      .then((res) => res.json())
      .then((data) => setPosts(data.items || []));
  }, []);

  useEffect(() => {
  const timeout = setTimeout(() => {
    setDebouncedSearch(search);
  }, 300);

  return () => clearTimeout(timeout);
}, [search]);
  function getHighResImage(url: string) {
  return url.replace(/\/s\d+(-c)?\//, "/s1600/");
}
  function extractImage(html: string) {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    if (!match) return "";
    return getHighResImage(match[1]);
  }

  function cleanText(html: string) {
  return html
    .replace(/<[^>]+>/g, "")        // remove HTML tags
    .replace(/&nbsp;/g, " ")        // remove nbsp
    .replace(/&amp;/g, "&")         // fix &
    .replace(/&quot;/g, '"')        // fix quotes
    .replace(/\s+/g, " ")           // normalize spaces
    .trim();                        // remove leading/trailing spaces
}

 const filteredPosts = posts.filter((post) => {
  const text = (
    post.title +
    " " +
    cleanText(post.content)
  ).toLowerCase();

  return text.includes(debouncedSearch.toLowerCase());
});
function highlight(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, `<mark>$1</mark>`);
}
  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);


  /* ================= LOADING ================= */
  if (!posts.length) {
    return (
      <div className="min-h-screen bg-[#F5F7FA]">
        <Navbar />
        <div className="pt-40 px-6 md:px-12">
          <div className="animate-pulse space-y-10">
            <div className="h-[60vh] bg-gray-300 rounded-3xl" />
            <div className="h-14 bg-gray-300 rounded-2xl max-w-xl mx-auto" />
            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-52 bg-gray-300 rounded-2xl" />
                  <div className="h-4 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 rounded w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />

      {/* HERO BANNER */}
      {featured && (
        <div className="relative h-[85vh] w-full overflow-hidden">
          <motion.img
            src={extractImage(featured.content)}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* content */}
          <div className="relative z-10 h-full flex items-end pb-20 px-6 md:px-16">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                {featured.title}
              </h1>

              <p className="text-gray-200 mt-4 line-clamp-3 text-lg">
                {cleanText(featured.content)}
              </p>

              <a
                href={featured.url}
                target="_blank"
                className="mt-6 inline-block bg-[#58A8AB] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Ler artigo completo →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH */}
      {/* <div className="px-6 md:px-12 mt-[-40px] mb-14 relative z-20">
        <div className="max-w-2xl mx-auto backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3">
          <span className="text-gray-500 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Buscar insights, estratégias, automação..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
  {debouncedSearch
    ? `${filteredPosts.length} resultado(s) encontrado(s)`
    : "Explore nossos artigos"}
</div> */}

      {/* GRID */}
      <div className="px-6 md:px-12 pb-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {rest.slice(0, visibleCount).map((post, i) => (
          <motion.a
            key={post.id}
            href={post.url}
            target="_blank"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group"
          >
            <div className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <div className="overflow-hidden">
                <img
                  src={extractImage(post.content)}
                  className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                        <h3
                        className="font-bold text-lg group-hover:text-[#58A8AB] transition"
                        dangerouslySetInnerHTML={{
                            __html: highlight(post.title, debouncedSearch),
                        }}
                        />

                <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                  {cleanText(post.content)}
                </p>

                <span className="inline-block mt-4 text-[#58A8AB] font-semibold text-sm">
                  Ler mais →
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
     {visibleCount < rest.length && (
  <div className="flex flex-col items-center mt-10 mb-12">
    
    <button
      onClick={() => setVisibleCount((prev) => prev + 3)}
      className="
        group relative overflow-hidden
        px-8 py-4 rounded-2xl
        bg-gradient-to-r from-[#58A8AB] to-[#6fc6c9]
        text-white font-semibold
        shadow-lg
        transition-all duration-500
        hover:scale-105 hover:shadow-2xl
      "
    >
        
      <motion.button
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }} className="relative z-10 flex items-center gap-2">
        Carregar mais
        <span className="transition-transfsorm group-hover:translate-x-1">
          →
        </span>
        </motion.button>

      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />
    </button>

    {/* counter OUTSIDE */}
    <div className="text-center text-xs text-gray-400 mt-3">
      Mostrando {Math.min(visibleCount, rest.length)} de {rest.length} artigos
    </div>
  </div>
)}

      {/* CONTACT */}
        <Contact />
         {/* FOOTER */}
      <Footer />
    </div>
  );
}