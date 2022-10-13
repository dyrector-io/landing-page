import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { EMAIL } from "../../const";

interface CommunityLinkProps {
  image: string;
  label: string;
  url: string;
}

const CommunityLink = (props: CommunityLinkProps) => {
  const { image, label, url } = props;

  return (
    <a className="pb-4 flex cursor-pointer" href={url}>
      <Image src={image} width={18} height={18} />
      <label className="pl-2 cursor-pointer">{label}</label>
    </a>
  );
};

interface ColumnProps {
  label: string;
  className?: string;
}

const Column = (props: React.PropsWithChildren<ColumnProps>) => {
  const { label, children, className } = props;

  return (
    <div className={clsx(className, "flex-auto flex flex-col")}>
      <label className="text-lg font-bold pb-7">{label}</label>
      {children}
    </div>
  );
};

const DyoFooter = () => {
  const { t } = useTranslation("index");

  return (
    <div className="px-12 flex">
      <div className="flex-auto basis-2/6">
        <Image
          src="/logo.svg"
          width="140px"
          height="46px"
          alt={t("common:logoAlt")}
        />
      </div>
      <Column label={t("common:company")} className="basis-1/6">
        <label className="pb-4">{t("common:home")}</label>
        <label className="pb-4">{t("common:docs")}</label>
        <label className="pb-4">{t("common:changelog")}</label>
        <label className="pb-4">{t("common:blog")}</label>
      </Column>
      <Column label={t("common:community")} className="basis-1/6">
        <CommunityLink
          image="/logo-discord.svg"
          label={t("common:discord")}
          url="http://discord.gg"
        />
        <CommunityLink
          image="/logo-github.svg"
          label={t("common:github")}
          url="https://github.com/dyrector-io/dyrectorio"
        />
        <CommunityLink
          image="/logo-twitter.svg"
          label={t("common:twitter")}
          url="https://github.com/dyrector-io/dyrectorio"
        />
        <CommunityLink
          image="/logo-linkedin.svg"
          label={t("common:linkedin")}
          url="https://github.com/dyrector-io/dyrectorio"
        />
      </Column>
      <div className="basis-2/6 flex flex-col">
        <Column label={t("common:getInTouch")}>
          <div className="flex">
            <CommunityLink
              image="/email.svg"
              label={EMAIL}
              url={`mailto:${EMAIL}`}
            />
          </div>
        </Column>
        <Column label={t("common:career")}>{t("careerText")}</Column>
      </div>
    </div>
  );
};

export default DyoFooter;
