import ClientReviews from "@/Component/ClientReviews";
import CollaborationPage from "@/Component/Contact";
import Hero from "@/Component/Hero";
import Portfolio from "@/Component/Portfolio";
import Services from "@/Component/Services";
import TeamMembers from "@/Component/TeamMember";
 
 

export default function Home() {
  return (
     <div>
      <Hero/>
      <Services/>
      <Portfolio/>
      <TeamMembers/>
      <ClientReviews/>
      <CollaborationPage/>
       
     </div>
  );
}
