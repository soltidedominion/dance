// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4kR15ceUPuzPRhk7Bbrpxi
// Component: 5YijewpKelfk

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Video } from "@plasmicpkgs/plasmic-basic-components";
import { PlasmicHead } from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 4kR15ceUPuzPRhk7Bbrpxi/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 5YijewpKelfk/css

import TwitterSvgrepoComSvgIcon from "./icons/PlasmicIcon__TwitterSvgrepoComSvg"; // plasmic-import: SVMyJSpLsJsm/icon
import TelegramSvgrepoComSvgIcon from "./icons/PlasmicIcon__TelegramSvgrepoComSvg"; // plasmic-import: QHbK4N0FHt8o/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  columns?: Flex__<"div">;
  htmlVideo?: Flex__<typeof Video>;
  h1?: Flex__<"h1">;
  h4?: Flex__<"h4">;
  text?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__jcrKu)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___6Fw7E)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/dance/images/photo20241002131013Jpg.jpg",
                    fullWidth: 576,
                    fullHeight: 1026,
                    aspectRatio: undefined
                  }}
                />

                <Video
                  data-plasmic-name={"htmlVideo"}
                  data-plasmic-override={overrides.htmlVideo}
                  className={classNames("__wab_instance", sty.htmlVideo)}
                  controls={true}
                  loop={true}
                  muted={true}
                  poster={"/plasmic/dance/images/photo20241002131013Jpg.jpg"}
                  src={
                    "https://site-assets.plasmic.app/3b3642259309ea4bfff7017c1dbfdde5.webp"
                  }
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__vAudY)}>
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"Wellcom To MooDance"}
                </h1>
                <h4
                  data-plasmic-name={"h4"}
                  data-plasmic-override={overrides.h4}
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4
                  )}
                >
                  {
                    "Not Just Another Meme Token, We\u2019re About to Shake Up the Charts This Uptober! \ud83c\udf89\ud83e\udd9b\ud83d\udc83"
                  }
                </h4>
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {
                    "Moodance is way more than just a meme token. It\u2019s your ticket to the coolest Dance Club around, where you can vibe, have a blast, and share all the viral fun while we aim for the top. Moo Dang\u2019s got the moves, and we\u2019ve got the community to back it up!"
                  }
                </div>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__oNtNp
                    )}
                    component={Link}
                    href={"https://Twitter.com/Moodancesol"}
                    platform={"nextjs"}
                  >
                    <TwitterSvgrepoComSvgIcon
                      className={classNames(projectcss.all, sty.svg__hqXbX)}
                      role={"img"}
                    />
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__owKuV
                    )}
                    component={Link}
                    href={"https://t.me/Moodancesol"}
                    platform={"nextjs"}
                  >
                    <TelegramSvgrepoComSvgIcon
                      className={classNames(projectcss.all, sty.svg__fLyE)}
                      role={"img"}
                    />
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__si4Z6
                    )}
                    component={Link}
                    href={
                      "https://dexscreener.com/solana/fiwkq3vqgdnokzjrrx69nbrmcd52tqeox54mjcm1g45t"
                    }
                    platform={"nextjs"}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__jxClN)}
                      displayHeight={"52px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"52px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/dance/images/dexScreenerLogoPngSeeklogo5272761Png.png",
                        fullWidth: 1000,
                        fullHeight: 1000,
                        aspectRatio: undefined
                      }}
                    />
                  </PlasmicLink__>
                </Stack__>
              </div>
            </div>
          </section>
          <PlasmicHead
            data-plasmic-name={"pageMetadataOverride"}
            data-plasmic-override={overrides.pageMetadataOverride}
            className={classNames("__wab_instance", sty.pageMetadataOverride)}
            description={
              "Moodance is way more than just a meme token. It\u2019s your ticket to the coolest Dance Club around, where you can vibe, have a blast, and share all the viral fun while we aim for the top. Moo Dang\u2019s got the moves, and we\u2019ve got the community to back it up!"
            }
            image={"/plasmic/dance/images/photo20241002132245Jpg.jpg"}
            title={"MooDance on SOL"}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "columns",
    "htmlVideo",
    "h1",
    "h4",
    "text",
    "freeBox",
    "pageMetadataOverride"
  ],
  section: ["section", "columns", "htmlVideo", "h1", "h4", "text", "freeBox"],
  columns: ["columns", "htmlVideo", "h1", "h4", "text", "freeBox"],
  htmlVideo: ["htmlVideo"],
  h1: ["h1"],
  h4: ["h4"],
  text: ["text"],
  freeBox: ["freeBox"],
  pageMetadataOverride: ["pageMetadataOverride"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  columns: "div";
  htmlVideo: typeof Video;
  h1: "h1";
  h4: "h4";
  text: "div";
  freeBox: "div";
  pageMetadataOverride: typeof PlasmicHead;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    columns: makeNodeComponent("columns"),
    htmlVideo: makeNodeComponent("htmlVideo"),
    h1: makeNodeComponent("h1"),
    h4: makeNodeComponent("h4"),
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
