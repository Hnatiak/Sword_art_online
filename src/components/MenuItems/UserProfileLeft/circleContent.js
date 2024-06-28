import TwoSward from './menuandoption/TwoSwards.png'
import TwoSwardGray from './menuandoption/TwoSwardsGray.png'

import MilitaryRecovery from './menuandoption/MilitaryRecovery.png'
import MilitaryRecoveryGray from './menuandoption/MilitaryRecoveryGray.png'

import Persecution from './menuandoption/Persecution.png'
import PersecutionGray from './menuandoption/PersecutionGray.png'

import Protection from './menuandoption/Protection.png'
import ProtectionGray from './menuandoption/ProtectionGray.png'

import Sward from './menuandoption/Sward.png'
import SwardGray from './menuandoption/SwardGray.png'

import Throwingasword from './menuandoption/Throwingasword.png'
import ThrowingaswordGray from './menuandoption/ThrowingaswordGray.png'

import Tracking from './menuandoption/Tracking.png'
import TrackingGray from './menuandoption/TrackingGray.png'

const circleContent = [
    { id: 1, icon: TwoSwardGray, iconActive: TwoSward, title: 'Search', description: "Description 1" },
    { id: 2, icon: TwoSwardGray, iconActive: TwoSward, title: 'Herb', description: "Description 2" },
    { id: 3, icon: TrackingGray, iconActive: Tracking, title: 'Tracking', description: "Description 3" },
    { id: 4, icon: PersecutionGray, iconActive: Persecution, title: 'Persecution', description: "Description 4" },
    { id: 5, icon: SwardGray, iconActive: Sward, title: 'One-handed straight sword', description: "Description 5" },
    { id: 6, icon: TwoSwardGray, iconActive: TwoSward, title: 'Two Swords (Unique Skill)', description: "A skill that allows you to attack with two swords at the same time\nBonus to attack speed: 1.80\nBonus to protection against weapons\nCooldown bonus" },
    { id: 7, icon: ThrowingaswordGray, iconActive: Throwingasword, title: 'Throwing a sword', description: "Description 7" },
    { id: 8, icon: ProtectionGray, iconActive: Protection, title: 'Protection', description: "Description 8" },
    { id: 9, icon: MilitaryRecoveryGray, iconActive: MilitaryRecovery, title: 'Military recovery', description: "Description 9" },
    { id: 10, icon: TwoSwardGray, iconActive: Protection, title: 'Combat medicine', description: "Description 10" },
    { id: 11, icon: TwoSwardGray, iconActive: Protection, title: 'Night vision', description: "Description 11" },
    { id: 12, icon: TwoSwardGray, iconActive: Protection, title: 'Disguise', description: "Description 12" },
];
  
export default circleContent;

//     // ${props => props.isSelected && `background-color: blue; `}