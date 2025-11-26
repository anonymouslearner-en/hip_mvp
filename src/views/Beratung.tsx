import { Navbar } from "@/components/layout/Navbar";
import { Page } from "@/components/layout/Page";
import MetaProgress from "@/components/organisms/MetaProgress";
import { consultationSteps } from "@/lib/constants";
import { HelperLane } from "@/components/organisms/HelperLane";
// import { Button } from "@/components/ui/button";
import CubeView from "@/components/3d/CubeView";

export const Beratung = () => {
  return (
    <Page layoutType="fullscreen" header={<Navbar />}>
      <div className="relative h-full bg-red-800 m-0 p-0">
        {/* Main content - full screen background */}
        <main className="inset-0 z-0 overflow-clip w-full h-full">
          <CubeView />
          {/* <div className="max-w-[60%] mx-auto space-y-6">
            <h2 className="text-2xl font-semibold mb-0">Beratung</h2>
            <p className="text-sm font-normal">Empfehlungen für Ihr Gebäude</p>
            <div className="bg-card p-8 rounded-lg border">
              <p className="text-muted-foreground">Beratung content</p>
            </div>
            <Button className="cursor-pointer">Hi</Button>
          </div> */}
        </main>

        {/* Aside - positioned absolutely on left */}
        <aside className="absolute left-4 top-8 w-[15%] z-10 bg-muted/30 p-4 rounded-lg shadow-md">
          <MetaProgress steps={consultationSteps} />
        </aside>

        {/* HelperLane - positioned absolutely on right */}
        <div className="absolute right-4 top-8 w-[0%] z-10 shadow-md">
          <HelperLane />
        </div>
      </div>
    </Page>
  );
};
