
import fordLogo from '../../../assets/logos/fordlogo.png'
import hondaLogo from '../../../assets/logos/hondalogo.png'
import hyundaiLogo from '../../../assets/logos/hyundailogo.png'
import isuzuLogo from '../../../assets/logos/isuzu.png'
import kiaLogo from '../../../assets/logos/kialogo.png'
import mazdaLogo from '../../../assets/logos/mazdalogo.png'
import mitusubishi from '../../../assets/logos/mitsubishi.png'
import nissanLogo from '../../../assets/logos/nissanlogo.png'
import opelLogo from '../../../assets/logos/opellogo.png'
import suzukiLogo from '../../../assets/logos/suzukilogo.png'
import toyotaLogo from '../../../assets/logos/toyotalogo.png'

const logos = [
    fordLogo,
    hondaLogo,
    hyundaiLogo,
    isuzuLogo,
    kiaLogo,
    mazdaLogo,
    mitusubishi,
    nissanLogo,
    opelLogo,
    suzukiLogo,
    toyotaLogo,

];

export default function LogoLoop() {
    return (
        <div className="logo-marquee mb-4 mx-auto overflow-hidden p-4 relative max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl">
            <div className="logo-track">
                {logos.map((logo, i) => (
                    <img
                        key={i}
                        src={logo}
                        alt={`logo-${i}`}
                        className="h-16 mx-8 flex shrink-0"
                    />
                ))}

                {logos.map((logo, i) => (
                    <img
                        key={`dup-${i}`}
                        src={logo}
                        alt={`logo-dup-${i}`}
                        className="h-16 mx-8 flex shrink-0"
                    />
                ))}
            </div>
        </div>
    );
}

