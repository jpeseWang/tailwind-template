import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

export const PUT = async (request) => {
  const { id, name, email, password } = await request.json();

  await connect();

  // You can choose to update password only if provided
  let updatedFields = { name, email };
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 5);
    updatedFields.password = hashedPassword;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true, // Return the updated user object
    });

    if (!updatedUser) {
      return new NextResponse("User not found", {
        status: 404,
      });
    }

    return new NextResponse("User has been updated", {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
