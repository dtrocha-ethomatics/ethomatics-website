import Image from "next/image";
import { team, teamSection } from "@/config/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export function Team() {
  return (
    <SectionWrapper id="team" background="white">
      <FadeIn>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-accent/40" />
            <p className="text-accent font-semibold text-[17px] md:text-[19px] uppercase tracking-[0.2em]">Wer wir sind</p>
            <div className="h-px w-6 bg-accent/40" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 italic">
            {teamSection.title}
          </h2>
          <p className="text-base md:text-lg text-primary/50 max-w-xl mx-auto leading-relaxed">
            {teamSection.subtitle}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-6 md:mt-10">
        {team.map((member, idx) => (
          <FadeIn key={member.name} delay={0.1 + idx * 0.15}>
            <Card className="flex flex-col gap-6 items-center p-8 md:p-10 h-full">
              <div className="relative w-full sm:w-64 h-44 flex-shrink-0 rounded-2xl overflow-hidden bg-secondary/30 mx-auto sm:mx-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={512}
                  height={341}
                  quality={90}
                  className="object-cover object-[center_15%] w-full h-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                <ul className="space-y-1 mb-3">
                  {member.credentials.map((cred) => (
                    <li key={cred} className="text-sm text-primary/60">{cred}</li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 justify-center">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm text-accent hover:underline underline-offset-4"
                  >
                    {member.email}
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/40 hover:text-[#0A66C2] transition-colors"
                      aria-label={`${member.name} auf LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
