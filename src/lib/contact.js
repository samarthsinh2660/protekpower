// One definition of how to reach the company, so the footer, the homepage
// support section, the contact page and the Organization schema cannot drift
// apart the way the map and the printed address did.
export const CONTACT = {
    addressLines: [
        '67, Capital Commercial Center',
        'Nr. Sanyas Ashram, Ashram Road',
        'Ahmedabad - 380009, Gujarat, India',
    ],
    addressOneLine:
        '67, Capital Commercial Center, Nr. Sanyas Ashram, Ashram Road, Ahmedabad - 380009, Gujarat, India',
    phones: [
        { display: '+91 98240 35667', tel: '+919824035667' },
        { display: '+91 94260 67762', tel: '+919426067762' },
    ],
    email: 'swastik23@gmail.com',
    whatsapp: '919426067762',
};

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT.addressOneLine
)}&z=17&output=embed`;

export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT.addressOneLine
)}`;
