"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDashIntl } from "@/components/dashboard/DashIntl";

export default function LoginForm({ cmsReady }: { cmsReady: boolean }) {
  const { t, locale } = useDashIntl();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const fieldClass =
    "w-full h-[64px] border border-[#292D32] rounded-lg px-5 font-poppins text-base text-brand-dark focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:outline-none transition-[border-color,box-shadow] disabled:opacity-50 disabled:bg-brand-blue-light/40";
  const labelClass =
    "absolute -top-2.5 left-4 bg-white px-2 font-poppins text-sm font-bold text-[#002B58] z-10";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmsReady) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        setError(t.login.invalid);
        return;
      }
      router.push("/dashboard");
      router.refresh();
    } catch {
      setError(t.login.failed);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      {/* subtle wave backdrop, same asset family as the site */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage: "url('/images/contact/contactWave.svg')",
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center bottom",
        }}
      />

      <div className="relative w-full max-w-[520px] bg-white rounded-[24px] shadow-[0_10px_40px_-12px_rgba(2,18,43,0.18)] ring-1 ring-brand-dark/5 p-10 md:p-12">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/shared/logo.svg"
            alt="LOGOS LEGAL"
            width={168}
            height={51}
            priority
            unoptimized
          />
        </div>

        <h1 className="font-raleway font-bold text-[26px] text-center text-[#002B58] mb-8">
          {t.login.title} <span className="text-brand-blue">{t.login.titleHighlight}</span>
        </h1>

        {!cmsReady && (
          <div className="mb-8 rounded-xl bg-amber-50 border border-amber-200 px-5 py-4 font-poppins text-sm text-amber-800">
            {locale === "nl"
              ? "Het CMS is nog niet gekoppeld aan een database. Inloggen is beschikbaar zodra de productie-database is ingesteld."
              : "The CMS is not connected to a database yet. Sign-in becomes available once the production database is set up."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div className="relative">
            <label htmlFor="email" className={labelClass}>
              {t.login.email}
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              disabled={!cmsReady}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className={labelClass}>
              {t.login.password}
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              disabled={!cmsReady}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={fieldClass}
            />
          </div>

          {error && (
            <p className="text-red-600 font-poppins text-sm -mt-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={busy || !cmsReady}
            className="btn-gradient w-full h-[64px] rounded-lg text-lg disabled:opacity-60"
          >
            {busy ? t.login.busy : t.login.submit}
          </button>
        </form>
      </div>
    </main>
  );
}
