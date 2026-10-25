import "./global.css";

export const metadata = {
    title: {
        default: "Asyifa Nurfaiza | Portofolio",
        template: "%s  | Asyifa Nurfaiza ",
    },
    description:
    "Portofolio Asyifa Nurfaiza, siswa SMK calon Junior Web Developer ",
};

export default function RootLayout({ childern }) {
    return (
        <html lang="id">
            <body className="bg-slate-100 text-gray-800 antilased font-sans">
                {childern}
            </body>
        </html>
    );
}