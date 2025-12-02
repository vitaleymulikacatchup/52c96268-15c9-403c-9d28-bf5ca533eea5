"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Zap, Award, Star, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/refreshing-beverage-glass-ice-cold-drink-1764682683115-39b79a3f.jpg"
          logoAlt="Brand Logo"
          brandName="RefreshBrand"
          button={{
            text: "Explore Now",
            href: "hero"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Refresh Your Moments"
          description="Discover the perfect blend of taste, quality, and sustainability. Our alternative beverage brand brings innovation to every sip with premium ingredients and bold flavors."
          tag="New Generation"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/refreshing-beverage-glass-ice-cold-drink-1764682683115-39b79a3f.jpg",
              imageAlt: "Refreshing beverage with ice"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/colorful-drink-bottles-vibrant-beverages-1764682686278-27255904.jpg",
              imageAlt: "Colorful drink bottles"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/tropical-fruit-juice-smoothie-fresh-1764682695600-c69ff7bc.jpg",
              imageAlt: "Tropical fruit juice"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/sparkling-water-drink-refreshing-liquid-1764682697666-0065a51e.jpg",
              imageAlt: "Sparkling water drink"
            }
          ]}
          stackedVariant="card"
          imagePosition="right"
          buttons={[
            {
              text: "Shop Now",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Mission"
          description="We reimagine refreshment by combining premium natural ingredients, bold innovative flavors, and sustainable practices. Every bottle tells a story of passion, quality, and commitment to making better choices for you and the planet."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Why Choose Us"
          description="Discover what sets our beverage brand apart from the rest"
          tag="Benefits"
          tagIcon={Zap}
          features={[
            {
              id: "01",
              title: "Natural Ingredients",
              description: "Crafted with premium natural ingredients sourced responsibly",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/natural-ingredients-fresh-fruit-organic-1764682700429-da32dda2.jpg",
              imageAlt: "Natural ingredients"
            },
            {
              id: "02",
              title: "Zero Compromise",
              description: "Exceptional taste without artificial additives or excessive sugar",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/zero-sugar-healthy-beverage-nutrition-1764682702333-8e464491.jpg",
              imageAlt: "Zero sugar nutrition"
            },
            {
              id: "03",
              title: "Quality Assured",
              description: "Premium packaging and rigorous quality control in every batch",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/premium-quality-beverage-packaging-desig-1764682704062-5dd0aba8.jpg",
              imageAlt: "Premium quality"
            },
            {
              id: "04",
              title: "Eco Conscious",
              description: "Sustainable practices and recyclable packaging for a better future",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/sustainable-eco-friendly-bottle-packagin-1764682706013-c77bbd24.jpg",
              imageAlt: "Sustainable packaging"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          carouselMode="buttons"
          gridVariant="uniform-all-items-equal"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Collection"
          description="Explore our diverse range of refreshing beverages crafted for every moment"
          tag="Featured Products"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Refresh Cola",
              price: "$2.49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/cola-drink-bottle-product-photography-1764682707871-caf77446.jpg",
              imageAlt: "Refresh Cola"
            },
            {
              id: "2",
              name: "Citrus Burst Lemonade",
              price: "$2.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/lemonade-juice-drink-bottle-product-1764682709908-df48f36b.jpg",
              imageAlt: "Citrus Burst Lemonade"
            },
            {
              id: "3",
              name: "Premium Iced Tea",
              price: "$3.49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/iced-tea-beverage-bottle-product-1764682711832-66553099.jpg",
              imageAlt: "Premium Iced Tea"
            },
            {
              id: "4",
              name: "Tropical Energy",
              price: "$3.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/energy-drink-bottle-colorful-beverage-1764682713732-2d972bcb.jpg",
              imageAlt: "Tropical Energy Drink"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          carouselMode="buttons"
          gridVariant="uniform-all-items-equal"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Join retailers and partners across the globe who believe in quality and innovation"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/store-retail-logo-partnership-1764682723989-54cc61d6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/restaurant-brand-logo-partnership-1764682725766-ae7d5e46.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/fitness-brand-logo-partnership-1764682727473-90986a30.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/wellness-brand-logo-partnership-1764682729841-452238d6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/beverage-distributor-logo-partnership-1764682733643-9032a6b0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/organic-market-logo-partnership-1764682735221-e4bc71e0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/health-store-logo-partnership-1764682736771-a3009e5b.jpg"
          ]
          textboxLayout="default"
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Customer Stories"
          description="Hear what our community says about their favorite beverages"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Wellness Coach",
              company: "FitLife Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/happy-customer-portrait-professional-pho-1764682715593-6564df48.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Fitness Enthusiast",
              company: "Active Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/smiling-person-outdoor-portrait-lifestyl-1764682718085-c6190df4.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Nutritionist",
              company: "Health Wellness",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/young-person-portrait-professional-heads-1764682720483-dc67c1cf.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Sustainability Advocate",
              company: "Green Living Co",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/confident-person-portrait-studio-photo-1764682722190-c14b2be7.jpg",
              imageAlt: "David Kim"
            }
          ]
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our products and brand"
          faqs={[
            {
              id: "1",
              title: "What makes your beverages different?",
              content: "Our beverages are crafted with premium natural ingredients, zero artificial additives, and sustainable packaging. We focus on quality over quantity, ensuring every bottle delivers exceptional taste and nutrition."
            },
            {
              id: "2",
              title: "Are your products suitable for all dietary preferences?",
              content: "Yes! We offer options for various dietary needs including sugar-free, vegan, and allergen-conscious formulations. Check product labels for specific information."
            },
            {
              id: "3",
              title: "Where can I purchase your products?",
              content: "Our beverages are available at select retailers, health-conscious stores, and online through our website. Visit our store locator for the nearest location."
            },
            {
              id: "4",
              title: "Do you use sustainable packaging?",
              content: "Absolutely. All our packaging is recyclable and sourced from eco-friendly suppliers. We are committed to minimizing our environmental impact."
            },
            {
              id: "5",
              title: "What is your return or satisfaction guarantee?",
              content: "We stand behind our products with a satisfaction guarantee. If you're not happy, contact our customer service team for a hassle-free resolution."
            }
          ]}
          textPosition="left"
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Connected"
          description="Join our community and get exclusive updates on new flavors, promotions, and sustainability initiatives."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/person-holding-drink-refreshing-moment-1764682741394-72baa650.jpg"
          imageAlt="Refreshing beverage moment"
          mediaPosition="right"
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Our Beverages",
                  href: "products"
                },
                {
                  label: "Flavors",
                  href: "products"
                },
                {
                  label: "Sustainability",
                  href: "about"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Blog",
                  href: "blog"
                },
                {
                  label: "Careers",
                  href: "careers"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Feedback",
                  href: "contact"
                }
              ]
            }
          ]
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/refreshing-beverage-glass-ice-cold-drink-1764682683115-39b79a3f.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2025 RefreshBrand. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}