import { Navbar } from "@/components/layout/Navbar";
import { Page } from "@/components/layout/Page";

export const Erfassung = () => {
  return (
    <Page layoutType="default" header={<Navbar />}>
      <section className="">
        <h2>Erfassung</h2>
      </section>
    </Page>
  );
};
