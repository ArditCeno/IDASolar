import { type Lang, translateText } from "./translations";

const ATTRS = ["placeholder", "aria-label", "title", "alt"] as const;

const textOriginals = new Map<Text, string>();
const attrOriginals = new Map<Element, Map<string, string>>();

function normalize(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/** Rikthen tekstin origjinal (shqip) për çdo nyje/atribut të përkthyer. */
export function restoreOriginalText() {
  textOriginals.forEach((original, node) => {
    if (node.isConnected) node.nodeValue = original;
  });
  textOriginals.clear();

  attrOriginals.forEach((map, element) => {
    if (element.isConnected) {
      map.forEach((value, name) => element.setAttribute(name, value));
    }
  });
  attrOriginals.clear();
}

function translateElement(element: Element, lang: Lang) {
  for (const name of ATTRS) {
    const value = element.getAttribute(name);
    if (!value) continue;
    const key = normalize(value);
    const next = translateText(lang, key);
    if (next === key) continue;

    let map = attrOriginals.get(element);
    if (!map) {
      map = new Map();
      attrOriginals.set(element, map);
    }
    if (!map.has(name)) map.set(name, value);
    if (element.getAttribute(name) !== next) element.setAttribute(name, next);
  }
}

function translateNode(node: Node, lang: Lang) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node as Text;
    const value = text.nodeValue ?? "";
    const key = normalize(value);
    if (!key) return;

    const next = translateText(lang, key);
    if (next === key) return;

    if (!textOriginals.has(text)) textOriginals.set(text, value);
    const lead = /^\s*/.exec(value)?.[0] ?? "";
    const trail = /\s*$/.exec(value)?.[0] ?? "";
    if (text.nodeValue !== lead + next + trail) {
      text.nodeValue = lead + next + trail;
    }
    return;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return;
  const element = node as Element;
  const tag = element.tagName;
  if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return;

  translateElement(element, lang);
  element.childNodes.forEach(child => translateNode(child, lang));
}

/** Përkthen të gjithë pemën DOM për gjuhën e dhënë. */
export function translateDom(root: ParentNode, lang: Lang) {
  if (lang === "sq") return;
  translateNode(root as unknown as Node, lang);
}

/** Rikthen/përkrah përkthimin kur React shton ose përditëson nyje. */
export function observeDom(root: Node, getLang: () => Lang) {
  const observer = new MutationObserver(mutations => {
    const lang = getLang();
    if (lang === "sq") return;
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach(node => translateNode(node, lang));
      } else if (mutation.type === "characterData") {
        translateNode(mutation.target, lang);
      }
    }
  });

  observer.observe(root, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  return () => observer.disconnect();
}
