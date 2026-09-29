import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";

const ART = (name: string) =>
  `https://images.unsplash.com/${name}?w=800&fm=jpg&fit=crop&q=80`;

const WORKS: WorksWheelItem[] = [
  {
    title: "Prismatic Rift",
    image: ART("photo-1470071459604-3b5ec3a7fe05"),
    href: "#prismatic-rift",
  },
  {
    title: "Ember Clouds",
    image: ART("photo-1441974231531-c6227db76b6e"),
    href: "#ember-clouds",
  },
  {
    title: "Neon Portal",
    image: ART("photo-1469474968028-56623f02e42e"),
    href: "#neon-portal",
  },
  {
    title: "Red Ribbon",
    image: ART("photo-1505142468610-359e7d316be0"),
    href: "#red-ribbon",
  },
  {
    title: "Celestial",
    image: ART("photo-1476820865390-c52aeebb9891"),
    href: "#celestial",
  },
  {
    title: "Uplight",
    image: ART("photo-1518837695005-2083093ee35b"),
    href: "#uplight",
  },
  {
    title: "Indigo Marble",
    image: ART("photo-1534528741775-53994a69daeb"),
    href: "#indigo-marble",
  },
  {
    title: "Launch Window",
    image: ART("photo-1517841905240-472988babdf9"),
    href: "#launch-window",
  },
  {
    title: "Cosmic Wave",
    image: ART("photo-1529626455594-4ff0802cfb7e"),
    href: "#cosmic-wave",
  },
];

export default function WorksWheelDemo() {
  return (
    <div className="bg-background text-foreground w-full h-screen">
      <WorksWheel items={WORKS} label="Works '26" action="View" />
    </div>
  );
}