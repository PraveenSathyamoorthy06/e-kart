const Footer = () => {
  const baseUrl = process.env.REACT_APP_CART_API_URL;
  const cartUrl = `${baseUrl}/carts`;
  return (
    <footer className="main-footer" role="contentinfo" aria-label="Site Footer">
      <p>
        &copy; {new Date().getFullYear()} E-Kart<br />
        <a href={cartUrl} target="_blank" rel="noopener noreferrer">DummyJSON Cart API</a>
      </p>
    </footer>
  );
};

export default Footer;
