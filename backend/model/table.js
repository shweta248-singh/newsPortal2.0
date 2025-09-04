import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    contact: { type: String },
    address: { type: String },
    profile: { type: String },
    userType: { type: String, default: 'user' },
    createdAt: { type: String, default: Date.now() },
    updatedAt: { type: String, default: Date.now() },
})

export const userModel = mongoose.model('users', userSchema);
const newsSchema = new mongoose.Schema({
    title: { type: String },
    category: { type: String },
     city: { type: String },
    type: { type: String },
    url: { type: String },
    desc: { type: String },
    userId: { type: String },
    isApproved: { type: Boolean, default:false },
    createAt: { type: String, default: Date.now() },
    updatedAt: { type: String, default: Date.now() },
})
export const newsModel = mongoose.model('news', newsSchema);

const ContactSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    message: { type: String },
    createdAt: { type: String, default: Date.now() },
    updatedAt: { type: String, default: Date.now() },
})
export const contactUsModel=mongoose.model('contacts',ContactSchema);      