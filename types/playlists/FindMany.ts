export interface PlaylistsFindManyResponse {
    Playlist: Playlist[];
}

export interface Playlist {
    name: string;
    id: string;
    published: boolean;
    playlistTrack: any[];
}
