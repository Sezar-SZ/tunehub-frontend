export const useAccessToken = () => useState<string>("accessToken", () => "");
export const useAuthIsChecked = () =>
    useState<boolean>("authIsChecked", () => false);
export const usePlayingSong = () => useState<string>("currentSong", () => "");
