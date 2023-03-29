import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ManifestoPreview from "./cms-preview-templates/manifesto";
import ProductsPreview from "./cms-preview-templates/products";
import ToolsPreview from "./cms-preview-templates/tools";
import CoreValuesPreview from "./cms-preview-templates/corevalues";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("manifesto", ManifestoPreview);
CMS.registerPreviewTemplate("tools", ToolsPreview);
CMS.registerPreviewTemplate("corevalues", CoreValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
