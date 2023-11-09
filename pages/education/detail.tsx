import dynamic from 'next/dynamic';
const NavigationPlush = dynamic(
  () => import('../../components/NavigationPlush')
);
const HomeEducation = dynamic(() => import('../../containers/HomeEducation'));
import SEO from '../../components/SEO';
import FooterCard from '../../components/FooterCard';
import Report from '../../components/Report';
import IntroEducation from '../../containers/IntroEducation';
import ProjectsCard from '../../components/ProjectsCard';
import Promt from '../../containers/Promt';
export default function Education() {
  return (
    <div>
      <SEO />
      <NavigationPlush />
      <HomeEducation />
      <Report/>

      <FooterCard />
    </div>
  );
}
