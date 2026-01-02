import {
  PartyPopper,
  Heart,
  GraduationCap,
  Users,
  Store,
  PawPrint,
  Plane,
} from "lucide-react";

export default function Designed() {
  return (
    <main className="w-full h-screen  mx-auto px-4 flex flex-col items-between justify-center bg-white md:px-24 pt-24 md:0">
      {/* HEADER */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Designed for Every Story
        </h2>
        <p className="text-sm text-[var(--color-secondary)]">
          Choose your moment type, then let the visuals speak.
        </p>
      </section>

      {/* GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
        {/* EVENT */}
        <article className="shadow-sm relative col-span-2 overflow-hidden rounded-[var(--radius)]
          bg-white border border-[var(--color-light)]
          p-6 transition-all hover:-translate-y-1 hover:shadow-md">

          {/* glow */}
          <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40
            bg-gradient-to-br from-orange-300/30 to-pink-300/20
            blur-3xl opacity-70" />

          <div className="relative z-10 flex items-center gap-4">
            <IconBox className="from-orange-100 to-pink-100 text-orange-700">
              <PartyPopper />
            </IconBox>
            <TextBlock
              title="Events & Parties"
              desc="Lively, spontaneous, full of stories"
            />
          </div>
        </article>

        {/* WEDDING */}
        <SmallCard
          title="Wedding"
          icon={<Heart />}
          className="bg-pink-100 text-pink-700"
        />

        {/* GRADUATION */}
        <SmallCard
          title="Graduation"
          icon={<GraduationCap />}
          className="bg-purple-100 text-purple-700"
        />

        {/* FANDOM */}
        <article className="shadow-sm col-span-2 md:col-span-1 md:row-span-2
          rounded-[var(--radius)] bg-white
          border border-[var(--color-light)]
          p-5 transition-all hover:-translate-y-1 hover:shadow-md
          flex md:flex-col gap-4">

          <IconBox className="from-blue-100 to-blue-200 text-blue-700">
            <Users />
          </IconBox>

          <TextBlock
            title="Fandom"
            desc="Community & idols"
          />
        </article>

        {/* BUSINESS */}
        <article className="shadow-sm col-span-2 rounded-[var(--radius)]
          bg-white border border-[var(--color-light)]
          p-6 transition-all hover:-translate-y-1 hover:shadow-md">

          <div className="flex justify-between items-center">
            <TextBlock
              title="Business & SMEs"
              desc="Products come to life"
            />
            <IconCircle className="bg-emerald-100 text-emerald-700">
              <Store />
            </IconCircle>
          </div>
        </article>

        {/* PETS */}
        <article className="shadow-sm rounded-[var(--radius)]
          bg-white border border-[var(--color-light)]
          p-5 transition-all hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center gap-4">
            <IconBox className="from-teal-100 to-teal-200 text-teal-700">
              <PawPrint />
            </IconBox>
            <h3 className="font-bold text-sm text-[var(--color-primary)]">
              Pets
            </h3>
          </div>
        </article>

        {/* TRAVEL */}
        <article className="shadow-sm relative col-span-2 md:col-span-3 overflow-hidden
          rounded-[var(--radius)]
          bg-white border border-[var(--color-light)]
          p-6 transition-all hover:-translate-y-1 hover:shadow-lg">

          {/* background gradient */}
          <div className="pointer-events-none absolute inset-0
            bg-gradient-to-br from-sky-100 via-white to-indigo-100
            opacity-40" />

          {/* highlight blob */}
          <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40
            bg-gradient-to-br from-sky-200/40 to-indigo-200/30
            blur-3xl" />

          <div className="relative z-10 flex items-center gap-4">
            <IconCircle className="bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-700">
              <Plane />
            </IconCircle>

            <TextBlock
              title="Travel & Lifestyle"
              desc="Journeys worth remembering longer"
              large
            />
          </div>
        </article>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 text-center">
        <p className="text-sm text-[var(--color-secondary)]">
          A digital photobooth that's{" "}
          <span className="font-bold text-[var(--color-accent)]">
            lightweight, fast, and human
          </span>
          .
        </p>
      </footer>
    </main>
  );
}

/* =======================
   HELPERS
======================= */

function IconBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${className}
      flex items-center justify-center`}
    >
      {children}
    </div>
  );
}

function IconCircle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

function TextBlock({
  title,
  desc,
  large = false,
}: {
  title: string;
  desc: string;
  large?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <h3
        className={`font-bold text-[var(--color-primary)] ${large ? "text-lg" : "text-base"
          }`}
      >
        {title}
      </h3>
      <p className="text-xs text-[var(--color-secondary)]">{desc}</p>
    </div>
  );
}

function SmallCard({
  title,
  icon,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  className: string;
}) {
  return (
    <article
      className="rounded-[var(--radius)]
      bg-white border border-[var(--color-light)]
      p-5 transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex flex-col gap-4 h-full justify-between">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${className}`}
        >
          {icon}
        </div>
        <h3 className="font-bold text-sm text-[var(--color-primary)]">
          {title}
        </h3>
      </div>
    </article>
  );
}
