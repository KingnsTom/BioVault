import dynamic from "next/dynamic";

// Correct the path to point to the 'components' folder
const HomeClient = dynamic(() => import("../components/HomeClient"), { ssr: false });

export default function HomePage() {
  return <HomeClient />;
}
