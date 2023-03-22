import { Schema, model } from "mongoose";

interface userSection {
    name: string;
    email: string;
    phone: String;
    password: string,
    address: String;
    role: String;
    language: String;
    isActive: boolean;
    isDelete: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const schema = new Schema<userSection>({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    password: { type: String, default: '' },
    address: { type: String, default: '' },
    role: { type: String, default: '' },
    language: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
},
    {
        // timestamps: true,
        versionKey: false,
    }
);

const userModel = model<userSection>("users", schema);
export = userModel;


















