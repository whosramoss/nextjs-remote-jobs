import { Lang } from "@utils/app-i18n-config";

export default class AppText {

  static home = {
    hero: {
      title: [
        { lang: Lang.portuguese, value: "Next.Js Template" },
        { lang: Lang.english, value: "Next.Js Boilerplate" }
      ],
      subtitle: [
        { lang: Lang.portuguese, value: "Next.Js • Three.Js • Typescript • Tailwind" },
        { lang: Lang.english, value: "Next.Js • Three.Js • Typescript • Tailwind" }
      ],
    },
    end: {
      text: [
        { lang: Lang.portuguese, value: "Three.js tem um grande número de formas 3D" },
        { lang: Lang.english, value: "Three.js has a large number of 3D shapes" }
      ],
      button: [
        { lang: Lang.portuguese, value: "Confira mais formas" },
        { lang: Lang.english, value: "Check more shapes" }
      ],
    },
  }
}
