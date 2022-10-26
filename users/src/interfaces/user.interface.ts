import IAlbum from "./album.interface";
import IArtist from "./artist.interface";
import IPlaylist from "./playlist.interface";
import ITrack from "./track.interface";
import IChat from "./chat.interface";
import { Document } from "mongoose";

export default interface IUser{
	username: string;
	email: string;
	password: string;
	image: string;
	genres: string[];
	phone: string;
	playlists: Partial<IPlaylist>[];
	albums: Partial<IAlbum>[];
	artists: Partial<IArtist>[];
	likedSongs: Partial<ITrack>[];
	chats: IChat[];
}
