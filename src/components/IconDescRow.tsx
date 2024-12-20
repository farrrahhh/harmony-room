import Image from 'next/image';

interface IconDescProps {
    icon: string;
    description: string;
}

const IconDesc: React.FC<IconDescProps> = ({ icon, description }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Image
                src={icon}
                alt="Icon"
                width={35}
                height={35}
                className="mb-2" // Memberi jarak antara ikon dan teks
            />
            <p className="sb2">{description}</p>
        </div>
    );
}

export default IconDesc;
