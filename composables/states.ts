export const useAccessToken = () => useState<string>("accessToken", () => "");
export const useAuthIsChecked = () =>
    useState<boolean>("authIsChecked", () => false);
export const useUserId = () =>
    useState<number | null>("currentSong", () => null);
export const usePlayingSong = () => useState<string>("currentSong", () => "");

export const useRevalidateSidebarSignal = () =>
    useState<boolean>("revalidateSignal", () => false); // find a way to revalidate the sidebar list...
