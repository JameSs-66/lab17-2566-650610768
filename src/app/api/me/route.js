import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Thanawat jaisert",
    studentId: "650610768",
  });
};
