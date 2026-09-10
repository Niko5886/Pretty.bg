import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { ProductCard } from "../ui/ProductCard";
import { PRODUCTS } from "../../data/products";
import { useI18n } from "../../i18n/I18nContext";

export function BestSellers() {
  const { t } = useI18n();
  return (
    <Section id="best-sellers" aria-labelledby="best-sellers-heading">
      <SectionHeading
        id="best-sellers-heading"
        eyebrow={t.bestSellers.eyebrow}
        title={t.bestSellers.title}
        subtitle={t.bestSellers.subtitle}
      />

      <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {PRODUCTS.map((product, i) => (
          <Reveal
            key={product.id}
            className="h-full"
            delay={`delay-${((i % 4) + 1) * 100}`}
          >
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="#" variant="outline" size="lg">
          {t.bestSellers.viewAll}
        </Button>
      </div>
    </Section>
  );
}
