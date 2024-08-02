export const useAccessToken = () => useState<string>("accessToken", () => "");
export const authIsChecked = () =>
    useState<boolean>("authIsChecked", () => false);
