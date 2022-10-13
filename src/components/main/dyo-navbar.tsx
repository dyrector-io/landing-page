import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";
import { DISCORD_INVITE } from "../../const";

const DyoNavbar = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className="px-28 py-11 flex items-center">
      <div className="w-36 cursor-pointer" onClick={() => router.push("/")}>
        <Image src="/logo.svg" width="140px" height="46px" alt={t("logoAlt")} />
      </div>
      <a
        className="ml-auto px-8 text-lg font-bold cursor-pointer"
        href="https://docs.dyrector.io/"
      >
        {t("docs")}
      </a>
      <a
        className="px-8 text-lg font-bold cursor-pointer"
        href="https://blog.dyrector.io/"
      >
        {t("blog")}
      </a>
      <a
        className="px-8 text-lg font-bold cursor-pointer"
        href="https://github.com/dyrector-io/dyrectorio/blob/develop/CHANGELOG.md"
      >
        {t("changelog")}
      </a>
      <a
        className="pl-10 h-[18px] cursor-pointer"
        href="https://github.com/dyrector-io/dyrectorio"
      >
        <Image
          className="py-auto"
          src="/logo-github.svg"
          width="18px"
          height="18px"
          alt={t("githubAlt")}
        />
      </a>
      <a className="pl-5 h-[18px] cursor-pointer" href={DISCORD_INVITE}>
        <Image
          src="/logo-discord.svg"
          width="18px"
          height="18px"
          alt={t("discordAlt")}
        />
      </a>
    </div>
  );
};

export default DyoNavbar;
