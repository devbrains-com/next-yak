import { styled } from "next-yak/internal";
import { AnyIcon, Icon } from "./icon";
import __styleYak from "./index.yak.module.css!=!./index?./index.yak.module.css";
export var Button = /*YAK Extracted CSS:
.Button {
  --yak-css-import: url("./icon:Icon",selector) {
    margin-right: 10px;
  }
  --yak-css-import: url("./icon:AnyIcon",selector) {
    margin-right: 15px;
  }
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button);