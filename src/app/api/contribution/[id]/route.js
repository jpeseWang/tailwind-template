import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Contribution from "@/models/Contribution";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const contribution = await Contribution.findById(id);

    return new NextResponse(JSON.stringify(contribution), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Contribution.findByIdAndDelete(id);

    return new NextResponse("Contribution has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
