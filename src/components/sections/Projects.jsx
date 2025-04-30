import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-[#f100ff] bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#a425ac]/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> FilmApp</h3>
              <p className="text-gray-400 mb-4">
              A dynamic mobile application designed to explore, search, and discover movies. Users can browse through trending films, search for specific titles, and access detailed information such as release dates, ratings, and synopses. Built with a focus on clean UI and responsive design, FilmApp offers a smooth and engaging user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Expo"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-[#8730ff] py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-[#c526ff] hover:text-[#fa98ff] transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-[#a425ac]/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Business</h3>
              <p className="text-gray-400 mb-4">
                Please give it a look. You are my guest.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Shopify"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-[#8730ff] py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://vexuscam.myshopify.com/"
                  className="text-[#c526ff] hover:text-[#fa98ff] transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            

            
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
