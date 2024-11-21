import { atom } from "recoil";


export const profileatom = atom({
    key: "profileatom",
    default: {
        img: "/dp.jpg",
        name: "Shivam Gupta",
        age: 22,
        location: "Guwahati",
        followers: 863,
        Likes: 180000,
        Photos: 8
    }
})