'use server';

import ProfileInfoForm from "@/components/ProfileInfoForm";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";
import { ProfileInfoModel } from "@/models/ProfileInfo";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);
    if(!session || !session.user?.email) {
        return 'Not Logged in';
    }

    const email = session.user.email;
    await mongoose.connect(process.env.MONGODB_URI as string);
    const profileInfoDoc = JSON.parse(JSON.stringify(
        await ProfileInfoModel.findOne({email})));
    return (
        <div className="max-w-2xl mx-auto px-4">
            <ProfileInfoForm  profileInfo={profileInfoDoc} />
            <div>
                donations list...
            </div>
        </div>
        
    )
}