import type { Song } from "../songs";

export interface PlaylistFindOneResponse {
    id: string;
    name: string;
    creatorId: number;
    published: boolean;
    playlistTrack: PlaylistTrack[];
}

export interface PlaylistTrack {
    id: number;
    song: Song;
}
