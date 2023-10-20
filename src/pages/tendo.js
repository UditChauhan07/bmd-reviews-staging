import LandingPage from "@/componets/LandingLayout";

const Tendo = ({ version, script, page })=>{
  return(
    <LandingPage version={version} script={script} page={'tendo'}/>
  )
}
Tendo.hideLayout = true;
export default Tendo;