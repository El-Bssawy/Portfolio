import { useLang } from "../context/language";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="container footer-inner">
        <p>
          {t.footer.made} <i className="fa-solid fa-heart heart"></i> {t.footer.by}
        </p>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Moaz El-Bssawy
        </p>
      </div>
    </footer>
  );
}
