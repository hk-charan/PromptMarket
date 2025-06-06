import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/utils/database";
import User from "@/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      await connectDB();

      const sessionUser = await User.findOne({ email: session.user.email });

      if (sessionUser) {
        session.user.id = sessionUser._id.toString();
        session.user.image = sessionUser.image; // ✅ explicitly assign image from DB
        session.user.username = sessionUser.username;
      }

      return session;
    },
  },

  async signIn({ profile }) {
    try {
      await connectDB();

      const userExists = await User.findOne({
        email: profile.email,
      });

      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(/\s+/g, "").toLowerCase(),
          image: profile.picture,
        });
      }

      return true;
    } catch (error) {
      console.error("Sign-in error:", error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
