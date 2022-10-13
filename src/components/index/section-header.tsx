import Image from "next/image";
import styles from "../../styles/index.module.css";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";

export const COMPASS_FOR_TEXTS = [
  "containers",
  "kubernetes",
  "engineers",
  "developers",
  "managers",
  "releases",
  "pipelines",
  "versions",
  "applications",
  "services",
  "configs",
  "products",
  "microservices",
  "code",
  "databases",
  "tickets",
  "workflows",
  "collaboration",
];

const SectionHeader = () => {
  const { t } = useTranslation("index");

  const textRef = useRef<HTMLSpanElement>(null);
  const textAnimationIndex = useRef<number>(0);

  const getAnimatedText = () =>
    t(`compassForItems.${COMPASS_FOR_TEXTS[textAnimationIndex.current]}`);

  useEffect(() => {
    const timer = setInterval(() => {
      textRef.current!.className = styles["animate-fade-out"];
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (textRef.current == null) {
      return;
    }

    textRef.current!.addEventListener("animationend", (e) => {
      if (e.animationName === styles["fadeOut"]) {
        textAnimationIndex.current =
          (textAnimationIndex.current + 1) % COMPASS_FOR_TEXTS.length;

        textRef.current!.innerText = getAnimatedText();
        textRef.current!.className = styles["animate-fade-in"];
      }
    });
  }, [textRef]);

  return (
    <div
      className={clsx(
        styles.world,
        "flex flex-wrap py-20 justify-center gap-20"
      )}
    >
      <div className="basis-full flex flex-col md:basis-[500px]">
        <div
          className={clsx(
            styles["text-gradient"],
            "font-sans-pro font-bold text-4xl pb-8"
          )}
        >
          {t("compassFor")}
          <span>
            &nbsp;
            <span ref={textRef}>{getAnimatedText()}</span>
          </span>
        </div>
        <label>{t("headerText")}</label>
        <div>
          <button
            className={clsx(
              styles["button-gradient"],
              "py-4 px-6 mt-6 font-bold"
            )}
          >
            Get Started for free
          </button>
        </div>
      </div>
      <div className="basis-full flex justify-center md:block md:basis-[500px]">
        <Image
          src="/header-ship.svg"
          layout="intrinsic"
          width={500}
          height={300}
        ></Image>
      </div>
    </div>
  );
};

export default SectionHeader;
