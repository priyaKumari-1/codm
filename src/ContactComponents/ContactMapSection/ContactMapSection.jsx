import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const locations = [
  {
    position: [52.478, -1.908],
    address: "🇬🇧 Spaces - Birmingham, The Mailbox Level 1, 3 Wharfside Street, B1 1RD, UK",
  },
  {
    position: [51.511, -0.123],
    address: "🇬🇧 London: 71-75 Shelton Street, Covent Garden, WC2H 9JQ, UK",
  },
  {
    position: [28.573, 77.327],
    address: "🇮🇳 India: SaaS AI Ihdp Business Park Plot Number 7, Serenia second floor, Sector 127, Noida, Uttar Pradesh 201304",
  },
  {
    position: [33.019, -96.698],
    address: "🇺🇸 USA: Talent4World LLC, 4501 Nightland Dr, Plano, TX 75024, USA",
  },
];

const ContactMapSection = () => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc.position}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
            {loc.address}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ContactMapSection;


// import './ContactMapSection.css';

// function ContactMapSection() {
//   return (
//     <div className='w-full' width="100%">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1851.1173613942783!2d-1.9081256244086313!3d52.47578883950326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd5f589ef0d5%3A0xca4de25613579339!2sSpaces%20-%20Birmingham%2C%20The%20Mailbox!5e1!3m2!1sen!2sin!4v1758890486683!5m2!1sen!2sin"
//         width="100%"
//         height="450"
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </div>
//   );
// }

// export default ContactMapSection;





// ===========================================








// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix default marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
// });

// // Marker data with coordinates, country flag, and address
// const locations = [
//   {
//     position: [52.478, -1.908], // Birmingham
//     label: "🇬🇧 Spaces - Birmingham, The Mailbox Level 1, 3 Wharfside Street, B1 1RD, UK",
//   },
//   {
//     position: [51.511, -0.123], // London
//     label: "🇬🇧 London: 71-75 Shelton Street, Covent Garden, WC2H 9JQ, UK",
//   },
//   {
//     position: [28.573, 77.327], // Noida, India
//     label: "🇮🇳 India: SaaS AI Ihdp Business Park Plot Number 7, Serenia second floor, Sector 127, Noida, Uttar Pradesh 201304",
//   },
//   {
//     position: [33.019, -96.698], // Plano, USA
//     label: "🇺🇸 USA: Talent4World LLC, 4501 Nightland Dr, Plano, TX 75024, USA",
//   },
// ];

// const ContactMapSection = () => {
//   return (
//     <MapContainer
//       center={[20.0, 0]} // Center of the world map
//       zoom={2}
//       style={{ height: "500px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {locations.map((loc, index) => (
//         <Marker key={index} position={loc.position}>
//           <Popup>{loc.label}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default ContactMapSection;
