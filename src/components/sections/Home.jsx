import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#cb15d6] to-[#6812e3] bg-clip-text text-transparent leading-right">
            Hi, I'm Mitsu
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I am an aspiring AI engineer with a deep passion for learning and building innovative tech solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#cb15d6] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#a425ac]/50 text-[#cb15d6] py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-[#8f0997]/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
