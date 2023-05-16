import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen border-2">
      <Navbar />
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
