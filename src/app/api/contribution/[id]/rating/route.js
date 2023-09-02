import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Contribution from "@/models/Contribution";
export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);
  try {
    await connect();
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const PUT = async (request, { query, body }) => {
  const { id } = query;
  const { username, score } = body; // Destructure the username and score from the body.

  try {
    await connect();
    const contribution = await Contribution.findById(id);
    if (!contribution) {
      return new NextResponse("Contribution not found", { status: 404 });
    }

    const existingRating = contribution.ratings.find(
      (rating) => rating.username === username
    );

    if (existingRating) {
      existingRating.score = score; // Update the existing rating with the new score.
    } else {
      // If the rating doesn't exist, add a new one.
      contribution.ratings.push({ username, score });
    }

    await contribution.save({ fields: ["ratings"] });
    return new NextResponse("Rating updated successfully", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
