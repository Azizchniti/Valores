"use client";

import { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://graph.instagram.com/${process.env.NEXT_PUBLIC_IG_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${process.env.NEXT_PUBLIC_IG_TOKEN}`
        );
        const data = await res.json();
        setPosts((data.data || []).slice(0, 3));
      } catch (error) {
        console.error("Error loading Instagram posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="relative">
      {/* MAIN CONTENT */}
      <div className="relative z-10 bg-white rounded-b-[92px] px-6 py-28 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">


            {/* Title */}
            <h2 className="text-center font-normal text-[2.2rem] md:text-[2.6rem] text-[#0F172A] mb-12">
              ÚLTIMAS <span className="text-[#58A8AB] font-normal">ATUALIZAÇÕES</span>
            </h2>


          {loading ? (
            <p className="text-[#94A3B8] font-normal">Carregando posts...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map(post => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0]
                             shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                             hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(88,168,171,0.35)]
                             transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    {post.media_type === "VIDEO" ? (
                      <video
                        src={post.media_url}
                        muted
                        playsInline
                        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <img
                        src={post.media_url}
                        alt={post.caption || "Instagram post"}
                        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#F8FBFF] to-white">
                    <span className="text-sm font-regular text-[#58A8AB]">
                      Instagram
                    </span>
                    <span className="text-sm font-regular text-[#0F172A]">
                      Ver post →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM CONTINUATION BACKGROUND */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 md:h-36"
       style={{
        backgroundColor: "#000",
        backgroundImage: "url('/image/backgrounds/Grid.png')",
        backgroundRepeat: "repeat",
      }}
      />
    </section>
  );
}
