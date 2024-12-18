import React from "react";
import CollapsePhotos from "../../components/CollapsePhotos";
import IconDesc from "@/components/IconDesc";
import TypeOfStudio from "@/components/TypeOfStudio";
import Review from "@/components/Review";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
const DetailStudioPage = () => {
  const photos = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
  ];

  return (
    <div className="bg-1A1A1A min-h-screen text-black">
        <div className="p-4 text-white mt-8 ml-10 mr-10">
            <SearchBar linkNavigate={""} height={45} />
        </div>
      <div className="container mx-auto pl-4 pr-4 pb-4">
        <CollapsePhotos photos={photos} />
      </div>
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between">
            <h2 className="text-black h2"> <span className="text-primary">SoulChord</span> Studio</h2>
            <div className="text-black flex-col text-right">
                
                <p className="sb1">Price/studio/hour starting from</p>
                <p className="h3 text-primary">Rp 199.000</p>
            </div>
        </div>

        <div className="flex-col mt-4 text-black">
            <div className="mt-4  boxStyle p-4">
                <p>SoulChard Studio is a space designed to cater to the needs of musicians, producers, and music lovers, whether for professional recording, band practice, or music workshops. The studio is equipped with modern equipment, such as digital mixers, high-quality microphones, and premium musical instruments. The room acoustics are professionally tuned to produce clear and immersive sound quality. Additionally, the studio offers a comfortable space with an aesthetic and creative design to inspire its users.</p>
            </div>
            <div className="flex justify-between mt-4 gap-4">
                <div className="boxStyle p-4 w-full sm:w-1/2">
                    <p className="sb1">Location</p>
                    <div className="flex items-center mb-2">
                    <img
                        src="/location.png"
                        alt="Location"
                        className="w-6 h-6 mr-2"
                    />
                    <p className="b1">Jl. Ir. H. Juanda No. 157, Dago Atas, Bandung, Jawa Barat</p>
                    </div>
                    <p className="sb1">Strategic Area</p>
                    <ul className="list-disc ml-6">
                        <li>Close to cafes and restaurants for relaxing after recording sessions.</li>
                        <li>A spacious parking area is provided for private vehicles.</li>
                        <li>Access to public transportation, including local minibusses and online ride services, is available.</li>
                    </ul>
                 </div>



                <div className="boxStyle p-4 w-full sm:w-1/2">
                    <p className="sb1">Facilities</p>
                    <div className="grid grid-cols-2 gap-4">
                        {/* isi iconDesc */}
                        <IconDesc icon="/Monitor-Recorder.png" description="Recording Booth" />
                        <IconDesc icon="/Call-Center-Support-Service.png" description="24-hours services" />
                        <IconDesc icon="/Music.png" description="Control Room" />
                        <IconDesc icon="/Milkshake.png" description="Cafetaria" />
                        <IconDesc icon="/Parking-Sign.png" description="Parking Lot" />
                        <IconDesc icon="/Wifi.png" description="Wi-Fi" />
                        <IconDesc icon="/Hotel-Air-Conditioner.png" description="Air Conditioner" />
                    </div>
                </div>

            </div>
        </div>
        <div className="bg-F5F5F5 rounded-md">
            <h3 className="h3 mt-4">Types of studios available at <span className="text-primary">SoulChord</span>  Studio</h3>
            <div className="flex flex-col gap-4 mt-4 ">
                <TypeOfStudio
                    type="Solo Studio"
                    facilities={["Premium condenser microphone", "Soundproof booth", "High-quality audio interface", "Ergonomic chair for work comfort"]}
                    capacity="1-2 people"
                    price="199.000"
                    description="This studio is designed for individual needs, such as solo singers, podcasters, or solo musicians who want to record vocals or instruments"
                    isAvailable={true}
                    photo="/studio1.png"
                />
                <TypeOfStudio
                    type="Small Band Studio"
                    facilities={["Drum kit and amplifiers", "Microphones for vocals and instruments", "Multi-channel mixer for multi-track recording", "Acoustic space with professional soundproofing"]}
                    capacity="3-5 people"
                    price="349.000"
                    description="This studio is intended for small bands with 3-5 members who want to rehearse or record together. The room is designed to accommodate various instruments such as drums, guitars, bass, and keyboards."
                    isAvailable={true}
                    photo="/studio2.png"
                />
                <TypeOfStudio
                    type="Large Band Studio"
                    facilities={["Projector", "Whiteboard", "24-hours services"]}
                    capacity="6-10 people"
                    price="499.000"
                    description="This larger studio is designed for bands with 6-10 members or musical groups such as small orchestras. Ideal for large group rehearsals or complex recording productions."
                    isAvailable={false}
                    photo="/studio3.png"
                />
            </div>

        </div>
        {/* Bagian reviews */}
        <div>
            <h3 className="h3 mt-4">Review from <span className="text-primary">SoulChord</span>  Studio Users</h3>
            <div className="flex flex-col gap-4 mt-4">
                <Review
                    username="John Doe"
                    review="The staff at this studio are incredibly knowledgeable, professional, and friendly. They were always available to offer helpful advice and technical assistance, without being intrusive. Their expertise and passion for music truly shine through in their work. They created a relaxed and supportive atmosphere that made the whole recording experience enjoyable and productive. They anticipated our needs before we even voiced them, which is a testament to their experience and dedication."
                    rating={5}
                />
                <Review
                    username="Jane Smith"
                    review="The sound quality in this studio is absolutely pristine. Every instrument, from the crisp highs of the cymbals to the deep resonance of the bass, was captured with incredible clarity. The acoustics of the recording rooms are clearly designed with precision, creating a natural and balanced sound that translates beautifully in the mix. I was particularly impressed with how well the room handled both loud, energetic performances and more delicate, intimate sessions. It's evident that a lot of thought and care has gone into creating an optimal sonic environment."
                    rating={4}
                />
                <Review
                    username="David Johnson"
                    review="This studio offers a truly world-class recording experience. I felt completely supported and inspired throughout the entire process, and I'm incredibly happy with the results. I would definitely return to this studio for future projects and highly recommend it to anyone looking for a top-tier recording experience."
                    rating={5}
                />
            </div>
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default DetailStudioPage;
