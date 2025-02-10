"use client";

import { About } from '@/components/marketing/about'
import { Gallery } from '@/components/marketing/gallery'
import { Hero } from '@/components/marketing/hero'
import MeetUsSection from '@/components/marketing/meet-us'
import NewsletterSection from '@/components/marketing/newsletter'
import { Products } from '@/components/marketing/products'
import ReviewsSection from '@/components/marketing/reviews'
import { Shop } from '@/components/marketing/shop'

export default function Home() {

  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Shop />
      <Gallery />
      <MeetUsSection />
      <ReviewsSection />
      <NewsletterSection />
    </main>
  );
}
