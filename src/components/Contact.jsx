import { Headline } from "./Headline";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Headline size="4xl" underlined className="mb-4">
            Direct it our way
          </Headline>
        </div>

        <div className="space-y-6">
          <a href="mailto:office@ferrasage.com">
            <button
              type="button"
              className="w-full py-4 cursor-pointer bg-[var(--color-primary)] text-white text-1.5xl font-medium rounded-lg transition-all hover:bg-[var(--color-primary)] hover:scale-[1.02] active:scale-[1.02]"
            >
              Send Inquiry 🔗
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
