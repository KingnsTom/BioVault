import slugify from "slugify";

export function extractHeadings(portableText: any[]) {
  return portableText
    .filter(block => block._type === "block" && /^h[1-6]$/.test(block.style))
    .map(block => ({
      text: block.children.map(child => child.text).join(""),
      slug: slugify(
        block.children.map(child => child.text).join(""),
        { lower: true, strict: true }
      ),
      level: block.style,
    }));
}
