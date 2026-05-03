import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdx-components";

type Props = {
  source: string;
};

export function MDXContent({ source }: Props) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
