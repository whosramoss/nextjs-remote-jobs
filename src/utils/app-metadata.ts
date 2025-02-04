export default class AppMetadata {
  private isLocalTest: boolean;
  private META_URL: string;
  private META_NAME: string;
  private META_DESCRIPTION: string;
  private META_SITENAME: string;
  private META_THUMBNAIL: string;
  private META_BASE: string;

  constructor(isLocalTest: boolean) {
    this.isLocalTest = isLocalTest;
    this.META_URL = "https://github.com/whosramoss/nt3/";
    this.META_NAME = "NT3 - NextJs Boilerplate";
    this.META_DESCRIPTION = "Next.js Boilerplate to creative projects";
    this.META_SITENAME = this.META_URL;
    this.META_THUMBNAIL = `${this.META_URL}thumbnail.png`;
    this.META_BASE = isLocalTest ? "http://localhost:3000/" : this.META_URL;
  }

  get META_IMAGE_PATH() {
    return this.isLocalTest ? './' : this.META_URL;
  }

  get defaultMetadata() {
    return {
      title: this.META_NAME,
      applicationName: this.META_NAME,
      description: this.META_DESCRIPTION,
      generator: "next.js",
      category: "coding",
      keywords: ["code", "creative", "effects"],
      alternates: {
        canonical: this.META_URL,
      },
      icons: this.getIcons(),
    };
  }

  get robotsMetadata() {
    return {
      index: true,
      follow: true,
      nocache: false,
      canonical: this.META_URL,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    };
  }

  get graphMetadata() {
    return {
      metadataBase: new URL(this.META_BASE),
      openGraph: {
        title: this.META_NAME,
        description: this.META_DESCRIPTION,
        url: this.META_URL,
        siteName: this.META_SITENAME,
        type: "website",
        images: [
          {
            url: this.META_THUMBNAIL,
            width: 1200,
            height: 630,
            alt: this.META_NAME,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: this.META_NAME,
        description: this.META_DESCRIPTION,
        images: this.META_THUMBNAIL,
      },
    };
  }

  private getIcons() {
    return [
      { rel: 'shortcut icon', type: "image/x-icon", url: `${this.META_BASE}favicon.ico` },
      { rel: 'icon', type: "image/x-icon", url: `${this.META_BASE}favicon.ico` },
      { rel: 'icon', type: "image/png", url: `${this.META_BASE}favicon-32x32.png`, sizes: "32x32" },
      { rel: 'icon', type: "image/png", url: `${this.META_BASE}favicon-16x16.png`, sizes: "16x16" },
      { rel: 'icon', type: "image/png", url: `${this.META_BASE}android-chrome-192x192.png`, sizes: "192x192" },
      { rel: 'icon', type: "image/png", url: `${this.META_BASE}android-chrome-512x512.png`, sizes: "512x512" },
      { rel: 'apple-touch-icon', url: `${this.META_BASE}apple-touch-icon.png`, sizes: "180x180" },
    ];
  }

  get completeMetadata() {
    const baseMetadata = {
      ...this.defaultMetadata,
      ...this.robotsMetadata,
    };

    if (!this.isLocalTest) {
      return {
        ...baseMetadata,
        ...this.graphMetadata,
      };
    }

    return baseMetadata;
  }
}
