const customTheme = {
  plain: {
    color: "white",
    backgroundColor: "#1D293B",
  },
  styles: [
    {
      types: ["prolog", "keyword", "builtin"],
      style: {
        color: "#CBD5E1",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#CBD5E1",
      },
    },
    {
      types: ["attr-value", "string", ""],
      style: {
        color: "#7DD3FC",
      },
    },
    {
      types: ["tag", "function"],
      style: {
        color: "#F472B6",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "#F87171",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "inherit",
        backgroundColor: "transparent",
      },
    },
  ],
};

export default customTheme;
