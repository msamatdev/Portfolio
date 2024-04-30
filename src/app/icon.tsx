import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
    width: 64,
    height: 64,
};

export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
            (
            <div
                style={{
                    fontSize: 42,
                    background: "black",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    borderRadius: "40%",
                    textAlign: "center",
                }}
            >
                M
            </div>
        ),
        {...size}
    );
}