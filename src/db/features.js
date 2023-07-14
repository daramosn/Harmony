import wifiIcon from '../assets/icons/wifi-icon.svg'
import smartIcon from '../assets/icons/smart-icon.svg'
import facesIcon from '../assets/icons/faces-icon.svg'
import eyeIcon from '../assets/icons/eye-icon.svg'
import doorIcon from '../assets/icons/door-icon.svg'
import anprIcon from '../assets/icons/anpr-icon.svg'

export const FEATURES_LIST = [
    {
        id: 1,
        icon: facesIcon,
        title: 'Familiar faces',
        description:
            'Our facial recognition system cross-references faces attempting to gain access into the Heatrow Estate with the register database of residents. We value your safety so no one gets in unless you say so.',
    },
    {
        id: 2,
        icon: eyeIcon,
        title: 'Eye in the Sky',
        description:
            'Our infrared (IR) outdoor bullet cameras are immune to whatever or lighting, and come in different resolutions and lenses. Sit back anywhere in the world and record everything going on in and around your home with crisp clear audio.',
    },
    {
        id: 3,
        icon: anprIcon,
        title: 'ANPR',
        description:
            'Our Automatic Number Plate Recognition system scans every plate trying to gain access into the Heatrow estate and cross references with our database of registered plates. Our advances algorithms can decode even blurry and dark images.',
    },
    {
        id: 4,
        icon: smartIcon,
        title: 'Smart Savings',
        description:
            'Save up to 50% more energy with our smart energy-consumption monitoring. Enjoy smart system in your home that help you dim lights, and even turn off home appliances when not in use. Even water leakages are detected in real-time if you ever leave the tap running.',
    },
    {
        id: 5,
        icon: wifiIcon,
        title: 'Fibre to the Home',
        description:
            'Our finer-optic cables are setup around the estate to deliver lightening fast internet whenever you need it at the comfort of your home. We present to you the future of broadband.',
    },
    {
        id: 6,
        icon: doorIcon,
        title: 'The Walls Have Ears',
        description:
            'Lock the doors, open the windows control the lights, and much more without lifting a finger, The tongue really is powerful. Go on, Speak, your home us listening.',
    },
]
