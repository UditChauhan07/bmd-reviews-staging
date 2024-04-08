import LandingPage from "@/componets/LandingLayout";

const Tendo = ({ version, script }) => {
  return (
    <LandingPage version={version} script={script} page={"tendo-LP-V2-WO"} />
  );
};
Tendo.hideLayout = true;
export default Tendo;
