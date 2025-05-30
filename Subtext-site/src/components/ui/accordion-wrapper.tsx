import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";

interface Props {
  data: {
    title: string;
    description: string;
    bullets?: string[]
  }[];
}

export function Accordion({ data }: Props) {
  return (
    <BaseAccordion type="single" collapsible className="w-full">
      {data.map((item, i) => {
        return (
          <AccordionItem value={`item-${i.toFixed()}`}>
            <AccordionTrigger className="text-lg">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-lg whitespace-pre-wrap">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
}
export function BulletAccordion({ data }: Props) {
  return (
    <BaseAccordion type="single" collapsible className="w-full">
      {data.map((item, i) => {
        return (
          <AccordionItem value={`item-${i.toFixed()}`}>
            <AccordionTrigger className="text-lg">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-lg whitespace-pre-wrap">
              {item.description}
            </AccordionContent>
            {item.bullets &&
              (
                <ul className="list-disc pl-5">
                  {item.bullets.map((bullet: String) => {
                    return <li className={`bullet-${i.toFixed()}`}>{bullet}</li>;
                  })}
                </ul>
              )}
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
}
