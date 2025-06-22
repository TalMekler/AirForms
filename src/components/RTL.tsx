import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import type { PropsWithChildren } from "react";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Rtl = ({ children }: PropsWithChildren) => {
  return <CacheProvider value={rtlCache}>{children}</CacheProvider>;
};

export default Rtl;
