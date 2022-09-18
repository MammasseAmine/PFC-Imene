import {ImCalculator} from "react-icons/im"
import {BsCalendar3,BsFillPersonBadgeFill} from "react-icons/bs"
import {AiOutlinePicRight,AiOutlineScan} from "react-icons/ai"



export const SidebarData = [
{
  name : 'Générer Le Code Barre',
  icon : <AiOutlineScan />,
  link : '/generationCodeBar',
},
{
  name : 'Gestion de Planning',
  icon : <BsCalendar3 />,
  link : '/planning',
},
{
  name : 'Calcul Ecrat',
  icon : <ImCalculator />,
  link : '/calculEcrat',
},
{
  name : 'Etablire Bordereau de Reserve',
  icon : <AiOutlinePicRight />,
  link : '/etablireBordereaudeReserve',
},
{
  name : 'Verification de Témoignage',
  icon : <BsFillPersonBadgeFill />,
  link : '/verificationdeTémoignage',
},
]