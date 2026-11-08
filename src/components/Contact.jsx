import { Headline } from "./Headline";
import { Section } from "./Section";

export function Contact({ variant }) {
  return (
    <Section variant={variant} tone="subtle" id="contact">
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
              className="w-full py-4 cursor-pointer bg-section-accent text-section-on-accent text-1.5xl font-medium rounded-lg transition-all hover:scale-[1.02] active:scale-[1.02]"
            >
              Send Inquiry 🔗
            </button>
          </a>
        </div>
      </div>
    </Section>
  );
}
