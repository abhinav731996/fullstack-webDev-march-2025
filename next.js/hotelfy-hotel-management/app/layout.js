import "@/styles/scss/theme.scss";

export const metadata = {
  title: "Hotelfy",
  description: "Abhinav/Sumit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}