import { Navbar } from "@/components/layout/Navbar";
import { Page } from "@/components/layout/Page";
import MetaProgress from "@/components/organisms/MetaProgress";
import { consultationSteps } from "@/lib/constants";
import { HelperLane } from "@/components/organisms/HelperLane";

export const Beratung = () => {
  return (
    <Page layoutType="default" header={<Navbar />}>
      <div className="grid grid-cols-[15%_60%_25%] gap-6 mx-auto max-w-[1080px] px-4 pt-8">
        <aside className="bg-muted/30 p-4 rounded-lg">
          <MetaProgress steps={consultationSteps} />
        </aside>

        <main className="space-y-6">
          <h2 className="text-2xl font-semibold mb-0">Beratung</h2>
          <p className="text-sm font-normal">Empfehlungen für Ihr Gebäude</p>
          <div className="bg-card p-8 rounded-lg border">
            <p className="text-muted-foreground">Beratung content</p>
          </div>
        </main>

        <HelperLane />
      </div>
    </Page>
  );
};
