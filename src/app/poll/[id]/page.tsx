"use client";
import useSound from "use-sound";

export default function Poll() {
  const [play] = useSound("/key-press1.mp3");
  return (
    <>
      <h1>Poll tal tal</h1>
      <div>amor amor</div>
      <input type='text' onChange={() => play()} />
    </>
  );
}
