import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const HomePageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={`py-[1rem min-h-48 `}>{children}</div>

      <Footer />
    </>
  );
};

export default HomePageLayout;
