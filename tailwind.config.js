module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./layout/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: // Palette 4
                {
                    // Primary
                    "teal-050": "#F2FDE0",
                    "teal-100": "#E2F7C2",
                    "teal-200": "#C7EA8F",
                    "teal-300": "#ABDB5E",
                    "teal-400": "#94C843",
                    "teal-500": "#7BB026",
                    "teal-600": "#63921A",
                    "teal-700": "#507712",
                    "teal-800": "#42600C",
                    "teal-900": "#2B4005",

                    // Neutrals
                    "blue-grey-050": "#F0F4F8",
                    "blue-grey-100": "#D9E2EC",
                    "blue-grey-200": "#BCCCDC",
                    "blue-grey-300": "#9FB3C8",
                    "blue-grey-400": "#829AB1",
                    "blue-grey-500": "#627D98",
                    "blue-grey-600": "#486581",
                    "blue-grey-700": "#334E68",
                    "blue-grey-800": "#243B53",
                    "blue-grey-900": "#102A43",

                    // Supporting
                    "blue-050": "#DCEEFB",
                    "blue-100": "#B6E0FE",
                    "blue-200": "#84C5F4",
                    "blue-300": "#62B0E8",
                    "blue-400": "#4098D7",
                    "blue-500": "#2680C2",
                    "blue-600": "#186FAF",
                    "blue-700": "#0F609B",
                    "blue-800": "#0A558C",
                    "blue-900": "#003E6B",

                    "purple-050": "#EAE2F8",
                    "purple-100": "#CFBCF2",
                    "purple-200": "#A081D9",
                    "purple-300": "#8662C7",
                    "purple-400": "#724BB7",
                    "purple-500": "#653CAD",
                    "purple-600": "#51279B",
                    "purple-700": "#421987",
                    "purple-800": "#34126F",
                    "purple-900": "#240754",

                    "red-050": "#FFEEEE",
                    "red-100": "#FACDCD",
                    "red-200": "#F29B9B",
                    "red-300": "#E66A6A",
                    "red-400": "#D64545",
                    "red-500": "#BA2525",
                    "red-600": "#A61B1B",
                    "red-700": "#911111",
                    "red-800": "#780A0A",
                    "red-900": "#610404",

                    "yellow-050": "#FFFAEB",
                    "yellow-100": "#FCEFC7",
                    "yellow-200": "#F8E3A3",
                    "yellow-300": "#F9DA8B",
                    "yellow-400": "#F7D070",
                    "yellow-500": "#E9B949",
                    "yellow-600": "#C99A2E",
                    "yellow-700": "#A27C1A",
                    "yellow-800": "#7C5E10",
                    "yellow-900": "#513C06",
                },
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}