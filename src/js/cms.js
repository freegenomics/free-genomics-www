import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ManifestoPreview from "./cms-preview-templates/manifesto";
import ProductsPreview from "./cms-preview-templates/products";
import ApplicationsPreview from "./cms-preview-templates/applications";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("manifesto", ManifestoPreview);
CMS.registerPreviewTemplate("applications", ApplicationsPreview);
CMS.registerPreviewTemplate("corevalues", CoreValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
