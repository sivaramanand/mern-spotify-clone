import getDataurl from "../utils/urlGenerator.js";
import { Album } from "../models/Album.js";
import { Song } from "../models/Song.js";
import cloudinary from "cloudinary";
export const createAlbum = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({
        message: "your are not admin",
      });

    const { title, description } = req.body;
    const file = req.file;
    const fileUrl = getDataurl(file);

    const cloud = await cloudinary.v2.uploader.upload(fileUrl.content);
    await Album({
      title,
      description,
      thumbnail: { id: cloud.public_id, url: cloud.secure_url },
    });
    res.json({
      message: "Album added",
    });
  } catch (err) {
    res.status(500).json({ error: `error in createalbum ${err}` });
  }
};
export const addThumbnail = async (req, res) => {
  try {
    const albums = await Album.find();

    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: `error in createalbum ${err}` });
  }
};
export const addSong = async (req, res) => {
  try {
    const albums = await Album.find();

    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: `error in createalbum ${err}` });
  }
};

export const getAllSongs = async (req, res) => {
  try {
    const albums = await Album.find();

    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: `error in createalbum ${err}` });
  }
};
export const getAllSongsByAlbum = async (req, res) => {
  try {
    const albums = await Album.find();

    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: `error in createalbum ${err}` });
  }
};
export const deleteSong = async (req, res) => {
  try {
    const albums = await Album.find();

    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: `error in createalbum ${err}` });
  }
};
export const getSingleSong = async (req, res) => {
  try {
    const albums = await Album.find();

    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: `error in createalbum ${err}` });
  }
};
export const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find();

    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: `error in createalbum ${err}` });
  }
};
