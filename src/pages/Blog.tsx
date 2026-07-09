import { useEffect } from "react";

const SORO_SCRIPT_SRC =
  "https://app.trysoro.com/api/embed/359e1b3b-bb16-46b5-b929-a0e58374f8da";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Quality Family Benefits";

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SORO_SCRIPT_SRC}"]`
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = SORO_SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & Resources
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Stay informed with the latest tips, guides, and news on supplemental
            insurance and protecting your family.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div id="soro-blog"></div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
