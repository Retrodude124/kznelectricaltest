import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SITE } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page took a power trip. Let's get you back online.
        </p>
        <Link to="/" className="mt-8 inline-block px-6 py-3 rounded-md bg-electric text-background font-semibold hover:shadow-glow transition">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something tripped a breaker</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or head back home.</p>
        <div className="mt-6 flex gap-2 justify-center">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-4 py-2 rounded-md bg-electric text-background font-semibold"
          >Try again</button>
          <a href="/" className="px-4 py-2 rounded-md border border-border">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KZN Electrical | Master Electricians in KwaZulu-Natal Since 1997" },
      { name: "description", content: "Certified electrical contractors serving Durban, Umhlanga, Ballito and greater KwaZulu-Natal. Industrial, commercial, solar, generators and CoC inspections." },
      { name: "author", content: "KwaZulu-Natal Electrical" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "KZN Electrical" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1a1f2c" },
      { property: "og:title", content: "KZN Electrical | Master Electricians in KwaZulu-Natal Since 1997" },
      { name: "twitter:title", content: "KZN Electrical | Master Electricians in KwaZulu-Natal Since 1997" },
      { property: "og:description", content: "Certified electrical contractors serving Durban, Umhlanga, Ballito and greater KwaZulu-Natal. Industrial, commercial, solar, generators and CoC inspections." },
      { name: "twitter:description", content: "Certified electrical contractors serving Durban, Umhlanga, Ballito and greater KwaZulu-Natal. Industrial, commercial, solar, generators and CoC inspections." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f8fc238a-e10f-4f96-a084-54c5627dba61" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f8fc238a-e10f-4f96-a084-54c5627dba61" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800;900&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ElectricalContractor",
          name: SITE.fullName,
          alternateName: "KZN Electrical",
          telephone: SITE.phone,
          email: "office@kznelectrical.co.za",
          foundingDate: "1997",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Unit J, Nandi Park, 34 Brickworks Way",
            addressLocality: "Briardene",
            addressRegion: "KwaZulu-Natal",
            postalCode: "4051",
            addressCountry: "ZA",
          },
          areaServed: SITE.areas,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
