import { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartData from "./CartData";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <main id="cart" tabIndex={-1}>
        <Suspense fallback={<div>Loading cart...</div>}>
          <CartData />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
