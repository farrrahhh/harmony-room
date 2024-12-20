import Image from 'next/image';

interface IconDescProps {
    icon: string;
    description: string;
}

const IconDesc: React.FC<IconDescProps> = ({ icon, description }) => {
    return (
        <div className="flex items-center space-x-4">
            <Image
                src={icon}
                alt="Icon"
                width={25}
                height={25}
            />
            <p className="b1">{description}</p>
        </div>
    );
}

export default IconDesc;