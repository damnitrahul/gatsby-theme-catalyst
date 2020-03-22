export default {
  name: "theme",
  title: "Theme-UI",
  type: "document",
  fields: [
    {
      title: "Light Mode Colors",
      name: "lmColors",
      description:
        "Select and overide colors for light mode, this is also the default color mode if dark mode is disabled.",
      type: "object",
      of: [{ type: "themeLmColor" }],
    },
    {
      title: "Dark Mode Colors",
      name: "dmColors",
      description: "Select and overide colors for dark mode.",
      type: "object",
      of: [{ type: "themeDmColor" }],
    },
  ],
}