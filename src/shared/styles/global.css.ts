import { globalStyle } from "@vanilla-extract/css";
import "@styles/layers.css.ts";
import "@styles/reset.css.ts";
import { vars } from "@styles/theme.css.ts";

globalStyle("html", {
  fontSize: "62.5%",
  scrollPaddingTop: "7rem",
});

globalStyle("body", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontFamily: `'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
});

globalStyle("#root", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  background: vars.color.grey900,
});

globalStyle("main", {
  //TODO: header, footer 추가 후 minHeight 및 paddingTop 수정
  minHeight: "100vh",
  flexGrow: 1,
});
