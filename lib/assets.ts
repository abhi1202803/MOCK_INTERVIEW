const productionBasePath = "/MOCK_INTERVIEW";

export const assetPath = (path: string) =>
  `${process.env.NODE_ENV === "production" ? productionBasePath : ""}${path}`;
