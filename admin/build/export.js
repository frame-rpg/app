"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
(async () => {
    const app = admin.initializeApp({
        credential: admin.credential.applicationDefault(),
    });
    const pages = await app.firestore().collection('/pages').get();
    const pageCollections = await Promise.all(pages.docs.map((pageCollection) => app.firestore().collection(`/pages/${pageCollection.id}/pages`).get()));
    const allDocs = {};
    for (let i = 0; i < pages.docs.length; i++) {
        allDocs[pages.docs[i].id] = {
            meta: pages.docs[i].data(),
            content: pageCollections[i].docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })),
        };
    }
    const allUsers = await app.firestore().collection('/users').get();
    const media = await Promise.all(allUsers.docs.map((user) => app.firestore().collection(`/users/${user.id}/media`).get()));
    const users = {};
    for (let i = 0; i < allUsers.docs.length; i++) {
        users[allUsers.docs[i].id] = {
            user: {
                userId: allUsers.docs[i].id,
                ...allUsers.docs[i].data(),
            },
            media: media[i].docs.map((media) => ({
                mediaId: media.id,
                ...media.data(),
            })),
        };
    }
    const allCampaigns = await app.firestore().collection('/campaigns').get();
    const characters = await Promise.all(allCampaigns.docs.map((campaign) => app.firestore().collection(`/campaigns/${campaign.id}/characters`).get()));
    const chat = await Promise.all(allCampaigns.docs.map((campaign) => app.firestore().collection(`/campaigns/${campaign.id}/chat`).get()));
    const rolls = await Promise.all(allCampaigns.docs.map((campaign) => app.firestore().collection(`/campaigns/${campaign.id}/rolls`).get()));
    const campaigns = {};
    for (let i = 0; i < allCampaigns.docs.length; i++) {
        campaigns[allCampaigns.docs[i].id] = {
            campaign: {
                campaignId: allCampaigns.docs[i].id,
                ...allCampaigns.docs[i].data(),
            },
            characters: characters[i].docs.map((doc) => ({
                characterId: doc.id,
                campaignId: allCampaigns.docs[i].id,
                ...doc.data(),
            })),
            rolls: rolls[i].docs.map((roll) => ({
                rollId: roll.id,
                ...roll.data(),
            })),
            chat: chat[i].docs.map((chat) => ({
                chatId: chat.id,
                ...chat.data(),
            })),
        };
    }
    console.log(JSON.stringify({ pages: allDocs, campaigns, users }, null, 2));
})();
