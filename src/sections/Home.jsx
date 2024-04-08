import { useTranslation } from "react-i18next";

function Home() {
  const [t, it8n] = useTranslation("home");

  return <div>{t("text")}</div>;
}

export default Home;
